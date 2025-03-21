import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ResumePreview from "./ResumePreview.js"; // Компонент для попереднього перегляду

const ResumeEditor = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      education: "",
      test: "",
    },
  });

  const [selectedTemplate, setSelectedTemplate] = useState("classic");

  // Функція збереження (тимчасово лог)
  const onSubmit = (data) => {
    console.log("Збережені дані:", data);
  };

  return (
    <div className="flex gap-6 p-6">
      {/* Форма редагування */}
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 space-y-4">
        <h2 className="text-xl font-bold">Редагування резюме</h2>

        <input
          {...register("fullName")}
          className="w-full border p-2"
          placeholder="Ваше ім'я"
        />
        <input
          {...register("email")}
          className="w-full border p-2"
          placeholder="Email"
        />
        <input
          {...register("phone")}
          className="w-full border p-2"
          placeholder="Телефон"
        />
        <textarea
          {...register("experience")}
          className="w-full border p-2"
          placeholder="Досвід роботи"
        />
        <textarea
          {...register("education")}
          className="w-full border p-2"
          placeholder="Освіта"
        />

        {/* Вибір шаблону */}
        <label className="block font-bold">Оберіть шаблон</label>
        <select
          className="border p-2"
          value={selectedTemplate}
          onChange={(e) => setSelectedTemplate(e.target.value)}
        >
          <option value="classic">Класичний</option>
          <option value="modern">Сучасний</option>
          <option value="creative">Креативний</option>
        </select>

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Зберегти
        </button>
      </form>

      {/* Попередній перегляд резюме */}
      <ResumePreview data={watch()} template={selectedTemplate} />
    </div>
  );
};

export default ResumeEditor;
