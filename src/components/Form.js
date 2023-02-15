
//        {/* <label>Title:</label>
//       <input
//         type="text"
//         name="name"
//         onChange={handleChange}
//         onBlur={handleBlur}
//         value={values.email}
//       />
//       {errors.name && touched.name && errors.name}
//       <input
//         type="password"
//         name="password"
//         onChange={handleChange}
//         onBlur={handleBlur}
//         value={values.password}
//       />
//       {errors.password && touched.password && errors.password}
//       <button type="submit" disabled={isSubmitting}>
//         Submit
//       </button> */}

// {/* <Formik
//   initialValues={{ name: '', password: '' }}
//   validate={values => {
//     const errors = {};
//     if (!values.name) {
//       errors.name = 'Required';
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.name)
//     ) {
//       errors.name = 'Invalid email address';
//     }
//     return errors;
//   }}
//   onSubmit={(values, { setSubmitting }) => {
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2));
//       setSubmitting(false);
//     }, 400);
//   }}
// > */}


// import React from "react";
// // import { Formik ,ErrorMessage } from "formik";
// // import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// // import { useFormik } from 'formik';
// // import { Container } from "react-bootstrap";

// const Product = () => {
//     // const validate = values => {
//     //     const errors = {};
//     //     if (!values.firstName) {
//     //       errors.firstName = 'Required';
//     //     } else if (values.firstName.length > 15) {
//     //       errors.firstName = 'Must be 15 characters or less';
//     //     }
      
//     //     if (!values.lastName) {
//     //       errors.lastName = 'Required';
//     //     } else if (values.lastName.length > 20) {
//     //       errors.lastName = 'Must be 20 characters or less';
//     //     }
      
//     //     if (!values.email) {
//     //       errors.email = 'Required';
//     //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     //       errors.email = 'Invalid email address';
//     //     }
      
//     //     return errors;
//     //   };

//     //   const formik = useFormik({
//     //     initialValues: {
//     //       firstName: '',
//     //       lastName: '',
//     //       email: '',
//     //     },
//     //     validate,
//     //     onSubmit: values => {
//     //       alert(JSON.stringify(values, null, 2));
//     //     },
//     //   });
      
//   return (
//     <>
//     <Form />
//       {/* <Formik
//         initialValues={{ email: "", password: "" }}
//         validate={(values) => {
//           const errors = {};
//           if (!values.email) {
//             errors.email = "Required";
//           } else if (
//             !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//           ) {
//             errors.email = "Invalid email address";
//           }
//           return errors;
//         }}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//         }}
//       > */}


//         {/* {({ isSubmitting }) => ( */}
//           {/* //  <Form>
//           //    <label type="email" name="email"> Title</label>
//           //    <ErrorMessage name="email" component="div" />
//           //    <label type="password" name="password">Desription</label>
//           //    <ErrorMessage name="password" component="div" />
//           //    <label></label>
//           //    <button type="submit" disabled={isSubmitting}>
//           //      Submit
//           //    </button>
//           //  </Form> */}
        
//           {/* <Container>
//             <Form onSubmit={formik.handleSubmit}> */}
//               {/* <Form.Group className="mb-3 mt-5" controlId="formBasicTitle">
//                 <Form.Label>Title</Form.Label>
//                 <Form.Control type="text" placeholder="Enter Title" />
//                 <ErrorMessage name="email" component="div" /> */}
//                 {/* <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text> */}
//               {/* </Form.Group> */}
// {/* 
//               <label htmlFor="firstName">First Name</label>
//        <input
//          id="firstName"
//          name="firstName"
//          type="text"
//          onChange={formik.handleChange}
//          value={formik.values.firstName}
//        />
//        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

//               <Form.Group className="mb-3" controlId="formBasicText">
//                 <Form.Label>Description</Form.Label>
//                 <Form.Control
//                   as="textarea"
//                   placeholder="Enter Description"
//                   style={{ height: "70px" }}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formBasicText">
//                 <Form.Label>Price</Form.Label>
//                 <Form.Control type="number" placeholder="Enter Price" />
//                 <ErrorMessage name="password" component="div" />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formBasicText">
//                 <Form.Label>Image</Form.Label>
//                 <Form.Control type="number" placeholder="Image" />
//               </Form.Group>

//               <Button variant="primary" type="submit" >
//                 Submit
//               </Button>
//             </Form>
//           </Container> */}
//         {/* )}
//       </Formik> */}
    
//     </>
//   );
// };

// // export default Product;
