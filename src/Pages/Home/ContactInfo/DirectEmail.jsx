import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const DirectEmail = () => {

    const form = useRef();

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        
        const serviceID = 'service_ebtfk5y';
        const templateID = 'template_2mq25sp';
        const publicKey = 'DDljNtrLPZ85Gw2zI';

        emailjs.sendForm(serviceID, templateID, form.current ,{
        publicKey: publicKey,
      })
      .then(() => {
            Swal.fire({
                title: "Sent!",
                text: "Your mail sent successfully.",
                icon: "success"
              });
        },
        (error) => {
            console.log(error.massage);
            Swal.fire({
                title: "Error!",
                text: error.text,
                icon: "error"
              });
        },
      );
    }

    return (
        <form ref={form} onSubmit={handleSubmit(onSubmit)} className=" bg-white p-5 rounded-2xl lg:w-96 space-y-3">

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl font-semibold">Name</span>
                </label>
                <input type="text" {...register("name")} placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl font-semibold">Email</span>
                </label>
                <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-xl font-semibold">Message</span>
                </label>
                <textarea type="text" {...register("message")} placeholder="type your message here" className="textarea textarea-bordered textarea-lg w-full max-w-xs" required />
            </div>

            <div className=" py-10">
                <input className=" btn btn-primary" type="submit" placeholder="send" />
            </div>
        </form>
    );
};

export default DirectEmail;