import React, {useState,  useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Paper } from "@mui/material";
import companiesApi from "../../../http/companies";
import { useNavigate, useParams } from "react-router-dom";

const validationSchema = Yup.object().shape({
  companyName: Yup.string().required("Company Name is required"),
});

const EditCompany = () => {
  const navigate = useNavigate();

  const [company, setCompany] = useState("")
  const {id} = useParams()


  function fetchCompany() {
    companiesApi().singleCompany(id)
      .then((res) => {
        setCompany(res.data.companyName)
      })
      .catch(error => {
        alert(`Error ocured while fetching company` + error.message)
      })
  }

  useEffect(() => {
    fetchCompany()
  }, []) 
  

  const formik = useFormik({
    initialValues: {
      companyName: company,
    },
    validationSchema: validationSchema,
    enableReinitialize: true,

    onSubmit: (values) => {
      companiesApi()
        .updateCompany(id, values )
        .then((res) => {
          alert("Company updated successfully!");
          navigate('/application/companies')
        })
        .catch((error) => {
          alert("Error occurred while updating company: " + error.message);
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

export default EditCompany;
