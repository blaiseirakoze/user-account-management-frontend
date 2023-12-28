import { Typography } from "@mui/material";
import {
  Form,
  Formik,
  FormikConfig,
  FormikHelpers,
  FormikValues,
} from "formik";
import React from "react";
import BasicButton from "../buttons/BasicButton";

interface Props extends FormikConfig<FormikValues> {
  children: React.ReactNode;
  spinner?: boolean;
  onCancel: any,
  validationSchema: any,
  initialValues: any,
  title: string
}

const BasicForm = ({
  children,
  onSubmit,
  onCancel,
  validationSchema,
  initialValues,
  title
}: Props) => {

  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    return onSubmit(values, actions);
  };


  return (
    <div className="bg-white rounded border p-4" style={{ width: "100%" }}>
      <Typography
        variant="h6"
        id="tableTitle"
        component="div"
        className='font-bold text-left capitalize'>
        {title}
      </Typography>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        {(formik) => (
          <Form>
            {children}
            <div className="text-right">
              <BasicButton bgColor="#F3F4F6" textColor="rgb(107 114 128)" name="cancel" action={onCancel} />
              <BasicButton type="submit" name="submit" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BasicForm;