import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const DirectEmail = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        console.log(data);

        Swal.fire({
            title: "Sent!",
            text: "Your mail sent successfully.",
            icon: "success"
          });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className=" bg-white p-5 rounded-2xl lg:w-96 space-y-3">

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
                    <span className="label-text text-xl font-semibold">Massage</span>
                </label>
                <textarea type="text" {...register("massage")} placeholder="type your massage here" className="textarea textarea-bordered textarea-lg w-full max-w-xs" required />
            </div>

            <div className=" py-10">
                <input className=" btn btn-primary" type="submit" placeholder="send" />
            </div>
        </form>
    );
};

export default DirectEmail;