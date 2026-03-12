// interface OrderFormProps {
//   onSubmit: (value: string) => void;
// }

// export default function OrderForm({ onSubmit }: OrderFormProps) {
//   const handleSubmit = (formData: FormData) => {
//     const username = formData.get("username") as string;
//     onSubmit(username);
//   };
//   return (
//     <form action={handleSubmit}>
//       <input type="text" name="username" />
//       <button type="submit">Place order</button>
//     </form>
//   );
// }

// import { useId } from "react";
// import css from "./OrderForm.module.css";

// interface OrderData {
//   username: string;
//   email: string;
//   delivery: string;
//   deliveryTime: string;
//   restrictions: string[];
// }

// export default function OrderForm() {
//   const fieldId = useId();

//   const handleOrder = (formData: FormData) => {
//     const orderData: OrderData = {
//       username: formData.get("username") as string,
//       email: formData.get("email") as string,
//       delivery: formData.get("delivery") as string,
//       deliveryTime: formData.get("deliveryTime") as string,
//       restrictions: formData.getAll("restrictions") as string[],
//     };
//     console.log(orderData);
//   };

//   return (
//     <form action={handleOrder} className={css.form}>
//       <fieldset className={css.fieldset}>
//         <legend className={css.legend}>Client info:</legend>
//         <label htmlFor={`${fieldId}-username`} className={css.label}>
//           Name
//         </label>
//         <input type="text" name="username" id={`${fieldId}-username`} />
//         <label htmlFor={`${fieldId}-email`} className={css.label}>
//           Email
//         </label>
//         <input type="text" name="email" id={`${fieldId}-email`} />
//       </fieldset>

//       <fieldset className={css.fieldset}>
//         <legend className={css.legend}>Delivery method:</legend>
//         <label className={css.option}>
//           <input type="radio" name="delivery" value="pickup" defaultChecked />
//           Pickup
//         </label>
//         <label className={css.option}>
//           <input type="radio" name="delivery" value="courier" />
//           Courier
//         </label>
//         <label className={css.option}>
//           <input type="radio" name="delivery" value="drone" />
//           Drone delivery
//         </label>
//       </fieldset>
//       <fieldset className={css.fieldset}>
//         <legend className={css.legend}>Dietary restrictions:</legend>
//         <label className={css.option}>
//           <input type="checkbox" name="restrictions" value="vegan" />
//           Vegan
//         </label>
//         <label className={css.option}>
//           <input type="checkbox" name="restrictions" value="gluten-free" />
//           Gluten-free
//         </label>
//         <label className={css.option}>
//           <input type="checkbox" name="restrictions" value="nut-free" />
//           Nut-free
//         </label>
//       </fieldset>
//       <label htmlFor={`${fieldId}-deliveryTime`} className={css.label}>
//         Preffered delivery time
//       </label>
//       <select
//         name="deliveryTime"
//         id={`${fieldId}-deliveryTime`}
//         defaultValue=""
//         className={css.input}
//       >
//         <option value="">--Choose delivery time--</option>
//         <option value="morning">Morning (8:00-12:00)</option>
//         <option value="afternoon">Afternoon (12:00-16:00)</option>
//         <option value="evening">Evening (16:00-20:00)</option>
//       </select>

//       <button type="submit" className={css.button}>
//         Place order
//       </button>
//     </form>
//   );
// }

import { useId } from "react";
import { Formik, Form, Field } from "formik";
import type { FormikHelpers } from "formik";
import css from "./OrderForm.module.css";

interface OrderFormValues {
  username: string;
  email: string;
  delivery: string;
  deliveryTime: string;
  restrictions: string[];
  message: string;
}

const initialValues: OrderFormValues = {
  username: "",
  email: "",
  delivery: "pickup",
  deliveryTime: "",
  restrictions: [],
  message: "",
};

export default function OrderForm() {
  const fieldId = useId();

  const handleSubmit = (
    values: OrderFormValues,
    actions: FormikHelpers<OrderFormValues>,
  ) => {
    console.log("Submitted order:", values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Client Info</legend>

          <label htmlFor={`${fieldId}-username`} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="username"
            id={`${fieldId}-username`}
            className={css.input}
          />

          <label htmlFor={`${fieldId}-email`} className={css.label}>
            Email
          </label>
          <Field
            type="email"
            name="email"
            id={`${fieldId}-email`}
            className={css.input}
          />
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Delivery method</legend>

          <label className={css.option}>
            <Field type="radio" name="delivery" value="pickup" />
            Pickup
          </label>
          <label className={css.option}>
            <Field type="radio" name="delivery" value="courier" />
            Courier
          </label>
          <label className={css.option}>
            <Field type="radio" name="delivery" value="drone" />
            Drone delivery
          </label>
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Dietary restrictions</legend>

          <label className={css.option}>
            <Field type="checkbox" name="restrictions" value="vegan" />
            Vegan
          </label>
          <label className={css.option}>
            <Field type="checkbox" name="restrictions" value="gluten-free" />
            Gluten-free
          </label>
          <label className={css.option}>
            <Field type="checkbox" name="restrictions" value="nut-free" />
            Nut-free
          </label>
        </fieldset>

        <label htmlFor={`${fieldId}-deliveryTime`} className={css.label}>
          Preferred delivery time
        </label>
        <Field
          as="select"
          name="deliveryTime"
          id={`${fieldId}-deliveryTime`}
          className={css.input}
        >
          <option value="">-- Choose delivery time --</option>
          <option value="morning">Morning (8:00–12:00)</option>
          <option value="afternoon">Afternoon (12:00–16:00)</option>
          <option value="evening">Evening (16:00–20:00)</option>
        </Field>

        <label htmlFor={`${fieldId}-message`} className={css.label}>
          Additional message
        </label>
        <Field
          as="textarea"
          name="message"
          rows={4}
          id={`${fieldId}-message`}
          className={css.textarea}
        />

        <button type="submit" className={css.button}>
          Place order
        </button>
      </Form>
    </Formik>
  );
}
