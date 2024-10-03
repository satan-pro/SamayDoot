import { View, Text } from "react-native";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CustomModal from "./CustomModal";

const PackageCard = ({ packageId, deliveryAgent, packageStatus }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [timeSlots, setTimeSlots] = useState({})

  const handleButtonPress = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleModalDataSubmit = (date, fromTime, toTime) => {
    setTimeSlots({date: date, from: fromTime, to: toTime})
    setModalVisible(false);
  }

  return (
    <View className="w-full border-2 rounded-lg p-4 flex-col items-start mt-7">
      <View className="flex-row justify-start bg-purple-primary p-2 rounded-md mb-7">
        <Text className="text-base font-ralewaySemiBold">Package Id: </Text>
        <Text className="text-base font-montserratSemiBold">{packageId}</Text>
      </View>
      <View className="flex-row items-center gap-4 mb-7">
        <View className="w-[30px] h-[30px] bg-gray rounded-full mb"></View>
        <Text className="font-ralewayMedium text-base">Parth Prasun</Text>
      </View>
      {((timeSlots.date && timeSlots.from && timeSlots.to) || (packageStatus!=='New'))?
      (<View className="flex-col items-start justify-start mb-7">
      <Text className="font-montserratMedium text-lg">Arriving on : <Text className="font-montserratBold text-lg">{timeSlots&&(timeSlots.date)?`${timeSlots.date}`:packageStatus!=='New'?"10-Oct-2024":null}</Text></Text>
        <Text className="font-montserratMedium text-lg">Expected time : <Text className="font-montserratBold text-lg">{timeSlots&&(timeSlots.from && timeSlots.to)?`${timeSlots.from} - ${timeSlots.to}`:packageStatus!=='New'?"10:30 AM - 1:00 PM":null}</Text></Text>
      </View>):null}
      <View className="items-center justify-center w-full">
        <CustomButton
          title={packageStatus === "New" ? "Select Time" : "Reschedule"}
          handlePress={handleButtonPress}
        />
      </View>
      <CustomModal
        visible={modalVisible}
        onClose={handleModalClose}
        onSubmit={handleModalDataSubmit}
        title={packageStatus === "New" ? "Schedule" : "Reschedule"}
      />
    </View>
  );
};

export default PackageCard;
