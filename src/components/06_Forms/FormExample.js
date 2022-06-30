
import {useFormik, Formik} from "formik"

export const FormExample1 = () => {
    return (
        <div style={{padding: 40}}>
            <Formik
                initialValues={{email: '', password: ''}}
                validate={values => {
                    const errors = {}
                    if(!values.email ){
                        errors.email = "Email is Required"
                    }

                    if(!values.password){
                        errors.password = "Password is required"
                    }

                    if(values.password.length < 10){
                        errors.password = "Password must be more then 10 characters"
                    }
                    return errors
                }}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        console.log(values)
                        setSubmitting(false)
                    }, 3000)
                }}
            >
                {
                    ({
                        values, 
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    }) => {
                    return (
                        <form noValidate onSubmit={handleSubmit}>
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                name="email" 
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && <p>Error: {errors.email}</p>}
                            <label htmlFor="password"> Password:</label>
                            <input 
                                type="password" 
                                name="password"
                                onChange={handleChange} 
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && <p>Error: {errors.password}</p>}
                            <input type="submit" value="login" disabled={isSubmitting}/>
                        </form>
                    )
                }}
            </Formik>
        </div>
    )
}

export const FormExample2 = () => {

    const formik = useFormik({
        initialValues: {
            email:"",
            password: ""
        },
        validate: values => {
            const errors = {}
            if(!values.email ){
                errors.email = "Email is Required"
            }

            if(!values.password){
                errors.password = "Password is required"
            }

            if(values.password.length < 10){
                errors.password = "Password must be more then 10 characters"
            }
            return errors
        },
        onSubmit: (values, {setSubmitting}) => {
            setTimeout(() => {
                console.log(values)
                setSubmitting(false)
            }, 3000)
        }
    })

    return(
        <>
            <form noValidate onSubmit={formik.handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.errors.email && formik.touched.email && <p>Error: {formik.errors.email}</p>}
                <label htmlFor="password"> Password:</label>
                <input 
                    type="password" 
                    name="password"
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password && <p>Error: {formik.errors.password}</p>}
                <input type="submit" value="login" disabled={formik.isSubmitting}/>
            </form>
            <button onClick={formik.handleSubmit} disabled={formik.isSubmitting} >Another submit</button>
        </>
    )
}