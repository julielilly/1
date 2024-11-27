"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { validationSchema } from "@/schemas/validationSchema";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(validationSchema),
    mode: "onTouched", // Triggers validation when input is touched
  });

  const onSubmit = (data) => {
    console.log("Validated data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Form container with centering and responsive design */}
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-lg p-10 w-full max-w-2xl" aria-labelledby="form-header">
        {/* Form header */}
        <h1 id="form-header" className="text-3xl font-bold mb-8 text-gray-800 text-center">
          Enhanced Contact Form
        </h1>

        {/* Personal Information Section */}
        <fieldset className="border border-gray-300 rounded-md p-4 mb-6">
          <legend className="text-lg font-semibold text-gray-700">Personal Information</legend>

          {/* Name input field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            {/* Input field for 'name', using react-hook-form's register */}
            <input id="name" type="text" {...register("personal.name")} className={`mt-1 block w-full p-2 border rounded-md ${errors.personal?.name ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-gray-500 focus:outline-none`} aria-invalid={!!errors.personal?.name} aria-describedby={errors.personal?.name ? "name-error" : undefined} />
            {/* Error message for 'name' if validation fails */}
            {errors.personal?.name && (
              <p id="name-error" className="text-red-600 text-sm mt-1">
                {errors.personal.name.message}
              </p>
            )}
          </div>

          {/* Email input field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input id="email" type="email" {...register("personal.email")} className={`mt-1 block w-full p-2 border rounded-md ${errors.personal?.email ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-gray-500 focus:outline-none`} aria-invalid={!!errors.personal?.email} aria-describedby={errors.personal?.email ? "email-error" : undefined} />
            {/* Error message for 'email' if validation fails */}
            {errors.personal?.email && (
              <p id="email-error" className="text-red-600 text-sm mt-1">
                {errors.personal.email.message}
              </p>
            )}
          </div>

          {/* Phone input field (optional) */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone (optional)
            </label>
            <input id="phone" type="tel" {...register("personal.phone")} className={`mt-1 block w-full p-2 border rounded-md ${errors.personal?.phone ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-gray-500 focus:outline-none`} aria-invalid={!!errors.personal?.phone} aria-describedby={errors.personal?.phone ? "phone-error" : undefined} />
            {/* Error message for 'phone' if validation fails */}
            {errors.personal?.phone && (
              <p id="phone-error" className="text-red-600 text-sm mt-1">
                {errors.personal.phone.message}
              </p>
            )}
          </div>
        </fieldset>

        {/* Preferences Section */}
        <fieldset className="border border-gray-300 rounded-md p-4 mb-6">
          <legend className="text-lg font-semibold text-gray-700">Preferences</legend>

          {/* Preferred contact method - Radio buttons */}
          <div className="mb-4">
            <p className="block text-sm font-medium text-gray-700">Preferred Contact Method</p>
            {/* Email option */}
            <div>
              <label className="inline-flex items-center">
                <input type="radio" value="email" {...register("preferences.contactMethod")} className="mr-2" />
                Email
              </label>
            </div>
            {/* Phone option */}
            <div>
              <label className="inline-flex items-center">
                <input type="radio" value="phone" {...register("preferences.contactMethod")} className="mr-2" />
                Phone
              </label>
            </div>
            {/* None option */}
            <div>
              <label className="inline-flex items-center">
                <input type="radio" value="none" {...register("preferences.contactMethod")} className="mr-2" />
                None
              </label>
            </div>
            {/* Error message for 'contactMethod' if validation fails */}
            {errors.preferences?.contactMethod && <p className="text-red-600 text-sm mt-1">{errors.preferences.contactMethod.message}</p>}
          </div>

          {/* Newsletter subscription checkbox */}
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" {...register("preferences.newsletter")} className="mr-2" />
              Subscribe to Newsletter
            </label>
          </div>
        </fieldset>

        {/* Message Section */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          {/* Textarea for message input */}
          <textarea id="message" {...register("message")} rows="4" className={`mt-1 block w-full p-2 border rounded-md ${errors.message ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-gray-500 focus:outline-none`} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined} />
          {/* Error message for 'message' if validation fails */}
          {errors.message && (
            <p id="message-error" className="text-red-600 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Password Section */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          {/* Password input field */}
          <input id="password" type="password" {...register("password")} className={`mt-1 block w-full p-2 border rounded-md ${errors.password ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-gray-500 focus:outline-none`} aria-invalid={!!errors.password} aria-describedby={errors.password ? "password-error" : undefined} />
          {/* Error message for 'password' if validation fails */}
          {errors.password && (
            <p id="password-error" className="text-red-600 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button type="submit" disabled={isSubmitting} className={`w-full bg-black text-white font-medium py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-800 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
