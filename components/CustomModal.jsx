import { Modal, View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import icons from "../constants/icons";
import DateTimePicker from "react-native-modal-datetime-picker";
import CustomButton from "./CustomButton";

const TimeSlots = ({ title, handleSubmit }) => {
  const [isTimePickerVisible, setTimePickerVisible] = useState(false);
  const [activeTimeSlot, setActiveTimeSlot] = useState("");

  const [fromTime, setFromTime] = useState({
    hours: "",
    minutes: "",
    ampm: "",
  });

  const [toTime, setToTime] = useState({
    hours: "",
    minutes: "",
    ampm: "",
  })

  const showTimePicker = (timeSlot) => {
    setActiveTimeSlot(timeSlot)
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleTimePickConfirm = (time) => {
    let timeObj = new Date(time);

    let hours = timeObj.getHours();
    let minutes = timeObj.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const selectedTime = {hours, minutes, ampm}

    if(activeTimeSlot==="from") {
      setFromTime(selectedTime)
    }
    else {
      setToTime(selectedTime)
    }

    hideTimePicker();
  };

  useEffect(() => {
    if(title==='First') {
      handleSubmit({fromTime, toTime});
    }
  },[title, fromTime, toTime, handleSubmit]);

  return (
    <View className=" items-start justify-center gap-1 mt-3">
      <Text className="font-ralewaySemiBold text-xl">{`${title} Preference`}</Text>
      <View className="flex-row justify-start gap-x-4 gap-y-2">
        <View className=" items-start justify-center w-[45%]">
          <Text className="font-ralewaySemiBold text-lg mb-2">From</Text>
          <TouchableOpacity
            onPress={()=>{showTimePicker("from")}}
            className="bg-gray p-2 rounded-md w-full"
          >
            <Text className="font-montserratRegular text-lg">
              {fromTime.hours
                ? `${fromTime.hours} : ${fromTime.minutes} ${fromTime.ampm}`
                : "Select Time"}
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-col items-start justify-center w-[45%]">
          <Text className="font-ralewaySemiBold text-lg mb-2">To</Text>
          <TouchableOpacity
            onPress={()=>{showTimePicker("to")}}
            className="bg-gray p-2 rounded-md w-full"
          >
            <Text className="font-montserratRegular text-lg">
              {toTime.hours
                ? `${toTime.hours} : ${toTime.minutes} ${toTime.ampm}`
                : "Select Time"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <DateTimePicker
        isVisible={isTimePickerVisible}
        mode="time"
        locale="en_GB"
        onConfirm={handleTimePickConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

const DateSlots = ({ title, handlePress }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className="bg-gray p-2 rounded-md w-[30%]"
    >
      <Text className="font-montserratRegular text-base">
        {title ? `${title}` : "Select"}
      </Text>
    </TouchableOpacity>
  );
};

const CustomModal = ({ title, visible, onClose, onSubmit }) => {
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [timeSlots, setTimeSlots] = useState({});

  const [date, setDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleDatePickConfirm = (date) => {
    let dateObj = new Date(date);
    let currDay = dateObj.getDate();
    let currMonth = dateObj.getMonth()+1;
    let currYear = dateObj.getFullYear();

    const monthNames = {1:'Jan', 2:'Feb', 3:'Mar', 4:'Apr', 5:'May', 6:'Jun', 7:'Jul', 8:'Aug', 9:'Sep', 10:'Oct', 11:'Nov', 12:'Dec'}

    currMonth = monthNames[currMonth]

    setDate({ day: currDay, month: currMonth, year: currYear });
    hideDatePicker();
  };

  const handleConfirm = () => {
    if(onSubmit) {
      const returnDate = `${date.day}-${date.month}-${date.year}`
      const returnFromTime = `${timeSlots.fromTime.hours}:${timeSlots.fromTime.minutes} ${timeSlots.fromTime.ampm}`
      const returnToTime = `${timeSlots.toTime.hours}:${timeSlots.toTime.minutes} ${timeSlots.toTime.ampm}`
      onSubmit(returnDate, returnFromTime, returnToTime);
    }
    onClose();
  }

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      animationType="slide"
      transparent={true}
      className="flex-col h-[75%] py-6 px-4"
    >
      <View className="flex-1 justify-end bg-opacity-50">
        <View className="bg-white w-full p-4 rounded-t-lg shadow-lg h-[75%]">
          <View className="flex-row items-center mb-7">
            <View className="flex-row justify-end items-center basis-[80%]">
              <Text className="font-ralewayBold text-3xl text-center mr-14">
                {title}
              </Text>
            </View>
            <TouchableOpacity
              onPress={onClose}
              className="flex-row basis-[20%] justify-end"
            >
              <Image
                source={icons.cross}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View className="flex-row items-center justify-start my-7">
            <Text className="font-ralewayBold text-2xl basis-[20%]">Date</Text>
            <View className="flex-row items-center justify-evenly gap-1 basis-[80%]">
              <DateSlots title={date.day} handlePress={showDatePicker} />
              <DateSlots title={date.month} handlePress={showDatePicker} />
              <DateSlots title={date.year} handlePress={showDatePicker} />
            </View>
          </View>
          <DateTimePicker
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDatePickConfirm}
            onCancel={hideDatePicker}
          />
          <Text className="font-ralewayBold text-2xl mb-3">Time Slots</Text>
          <View className="p-4 gap-4 mb-7">
            <TimeSlots title={"First"} handleSubmit={setTimeSlots}/>
            <TimeSlots title={"Second"} />
            <TimeSlots title={"Third"} />
          </View>
          <CustomButton 
            title="Confirm"
            handlePress={handleConfirm}
          />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
