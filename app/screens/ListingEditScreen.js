import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "bike",
    label: "Two Wheeler",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Small Car",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "car",
    label: "Sedan Car",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "truck",
    label: "SUV - Fortuner",
    value: 4,
  },
];

function ListingEditScreen() {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField
          maxLength={255}
          name="Parking Lot title"
          placeholder="Parking Lot title"
        />
        <FormField
          maxLength={255}
          name="Parking Lot address"
          placeholder="Parking Lot address"
        />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="Capacity"
          placeholder="Capacity"
          width={120}
        />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price/Hr"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
