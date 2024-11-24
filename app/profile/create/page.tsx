import { SubmitButton } from "@/components/form/buttons";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";

interface ProfileState {
   
    firstName?: string;
    lastName?: string;
    userName?: string;
  }

const createProfileAction = async (prevState:ProfileState,formData: FormData) => {
  "use server";
  const firstName = formData.get("firstName") as string;
  console.log(firstName);
  return {message: "🎉Create Profile Success!.🎉"}
};

const CreateProfile = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">New User</h1>
      <div className="border p-8  rounded-md ">
        <FormContainer action={createProfileAction}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              name="firstName"
              label="First Name"
              type="text"
              placeholder="First Name"
              defaultValur=""
            />
            <FormInput
              name="lastName"
              label="Last Name"
              type="text"
              placeholder="Last Name"
              defaultValur=""
            />
            <FormInput
              name="userName"
              label="User Name"
              type="text"
              placeholder="User Name"
              defaultValur=""
            />
          </div>
          <SubmitButton text="Fuck tus" size="lg" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProfile;
