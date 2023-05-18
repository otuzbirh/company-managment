import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Paper } from "@mui/material";
import companiesApi from "../../../http/companies";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  companyName: Yup.string().required("Company Name is required"),
});

const CreateCompany = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      companyName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      companiesApi()
        .create( values )
        .then((res) => {
          alert("Company created successfully!");
          navigate('/application/companies')
        })
        .catch((error) => {
          alert("Error occurred while creating company: " + error.message);
        });
    },
  });

  return (
    <Paper
      elevation={2}
      sx={{
        width: "95%",
        height: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="companyName"
          name="companyName"
          label="Company Name"
          value={formik.values.companyName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{marginBottom: 2}}
          error={
            formik.touched.companyName && Boolean(formik.errors.companyName)
          }
          helperText={formik.touched.companyName && formik.errors.companyName}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default CreateCompany;
