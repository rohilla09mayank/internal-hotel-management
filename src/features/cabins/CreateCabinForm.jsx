import { useForm } from "react-hook-form";
import { useEditCabin } from "./useEditCabin";
import { useAddCabin } from "./useAddCabin";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
/* eslint-disable react/prop-types */

function CreateCabinForm({ cabinToEdit }) {
  const { id: editId, ...editValues } = cabinToEdit || {};
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  const { isEditing, editCabin } = useEditCabin();
  const { isAdding, createCabin } = useAddCabin();

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    const newCabin = { ...data, image: image };
    if (isEditSession)
      editCabin(
        { data: { ...newCabin }, id: editId },
        {
          onSuccess: () => reset(),
        }
      );
    else
      createCabin(newCabin, {
        onSuccess: () => reset(),
      });
  }

  const isWorking = isEditing || isAdding;

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin Name" errors={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", { required: "This field is required." })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" errors={errors?.maxCapacity?.message}>
        <Input
          disabled={isWorking}
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required.",
            min: { value: 1, message: "Capacity should be atleast 1" },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" errors={errors?.regularPrice?.message}>
        <Input
          type="number"
          disabled={isWorking}
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required.",
            min: { value: 1, message: "Capacity should be atleast 1" },
          })}
        />
      </FormRow>

      <FormRow label="Discount" errors={errors?.discount?.message}>
        <Input
          type="number"
          disabled={isWorking}
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required.",
            validate: (value) =>
              value < getValues().regularPrice ||
              "Discount should be less than Regular Price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        errors={errors?.description?.message}
      >
        <Textarea
          disabled={isWorking}
          id="description"
          defaultValue=""
          {...register("description", { required: "This field is required." })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          disabled={isWorking}
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required.",
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? "Edit" : "Add"}</Button>
      </FormRow>

      {/* 

      <FormRow>

        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isAdding}>Add cabin</Button>
      </FormRow> */}
    </Form>
  );
}

export default CreateCabinForm;
