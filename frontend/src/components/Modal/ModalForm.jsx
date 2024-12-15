import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { jsPDF } from "jspdf";

const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number cannot exceed 15 digits"),
  travelers: z.number().min(1, "At least one traveler is required").nonnegative(),
  specialRequests: z.string().optional(),
});

const ModalForm = ({ closeModal, totalprice}) => {

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bookingSchema),
  });

  const generateInvoice = (data) => {
    const { name, email, phone, travelers } = data;

    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Invoice", 20, 20);

    doc.setFontSize(12);
    doc.text(`Customer Name: ${name}`, 20, 30);
    doc.text(`Email: ${email}`, 20, 40);
    doc.text(`Phone: ${phone}`, 20, 50);
    // doc.text(`Package: ${packageDetails}`, 20, 60);
    doc.text(`Travelers: ${travelers}`, 20, 70);

    doc.setFontSize(12);
    doc.text(`Total Price: ₹ ${totalprice * travelers}`, 20, 90);

    doc.save(`invoice_${name}.pdf`);
  };

  const onSubmit = (data) => {
    setFormData(data);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      {submitted ? (
        <div className="p-6 bg-white rounded shadow-lg w-96">
          <h2 className="mb-4 text-xl font-bold">Invoice</h2>
          <div>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            {/* <p><strong>Package:</strong> {packageDetails}</p> */}
            <p><strong>Travelers:</strong> {formData.travelers}</p>
            <p><strong>Total Price:</strong> ₹ {totalprice * formData.travelers}</p>
            <button
              onClick={() => generateInvoice(formData)}
              className="px-4 py-2 mt-4 text-white rounded bg-primary_button"
            >
              Download Invoice
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 ml-4 text-white bg-gray-500 rounded hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6 bg-white rounded shadow-lg w-96">
          <h2 className="mb-4 text-xl font-bold">Book Your Trip</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block mb-1">Name:</label>
              <input
                type="text"
                {...register("name")}
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter your name"
              />
              {errors.name && (
                <span className="text-sm text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1">Email:</label>
              <input
                type="text"
                {...register("email")}
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-sm text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1">Phone Number:</label>
              <input
                type="tel"
                {...register("phone")}
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <span className="text-sm text-red-500">{errors.phone.message}</span>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1">Number of Travelers:</label>
              <input
                type="number"
                {...register("travelers", { valueAsNumber: true })}
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter number of travelers"
              />
              {errors.travelers && (
                <span className="text-sm text-red-500">
                  {errors.travelers.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1">Special Requests:</label>
              <textarea
                {...register("specialRequests")}
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter any special requests"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-white rounded bg-primary_button"
            >
              Pay: ₹ {totalprice}
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 ml-4 text-white bg-gray-500 rounded hover:bg-gray-600"
            >
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ModalForm;
