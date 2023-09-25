import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import dbConnect from "../../utils/dbConnect";
import FormGroup from "../../models/FormGroup";
import FirstSection from "../../components/filloutform/03FirstSection";

interface FormGroupProps {
  forms: { name: string; _id: string }[];
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  await dbConnect();

  const formGroupId = context.params?.formGroupId as string;
  const formGroup = await FormGroup.findById(formGroupId);

  if (!formGroup) {
    return {
      notFound: true,
    };
  }

  // Convert Mongoose document to plain JavaScript object and select only necessary data
  const forms = formGroup.toObject().forms.map((form: any) => ({
    name: form.name,
    _id: form._id.toString(),
  }));

  return {
    props: {
      forms,
    },
  };
};

const FormGroupPage: React.FC<FormGroupProps> = ({ forms }) => {
  const [selectedForm, setSelectedForm] = useState<string | null>(null);
  const [formData, setFormData] = useState<any>({});

  const handleSelectChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedForm(e.target.value);

    if (e.target.value) {
      try {
        const response = await fetch(
          `/api/getFormData?formId=${e.target.value}`
        );
        if (response.ok) {
          const formData = await response.json();
          setFormData(formData);
        } else {
          console.error("Failed to fetch form data");
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    } else {
      setFormData({}); // Clear data if no form is selected
    }
  };

  const handleSave = async () => {
    if (!selectedForm) return;
    await fetch(`/api/saveFormData?formId=${selectedForm}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  };

  return (
    <div>
      <h1>Select a form</h1>
      <select onChange={handleSelectChange}>
        <option value="">Select...</option>
        {forms.map((form) => (
          <option key={form._id} value={form._id}>
            {form.name}
          </option>
        ))}
      </select>
      {selectedForm && (
        <div>
          <FirstSection selectedForm={selectedForm} formData={formData} />
          <button onClick={handleSave}>Save Data</button>
        </div>
      )}
    </div>
  );
};

export default FormGroupPage;
