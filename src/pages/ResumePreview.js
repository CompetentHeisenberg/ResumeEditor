import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ResumePreview = ({ data, template }) => {
  const resumeRef = useRef(); // Посилання на блок з резюме

  // Функція експорту у PDF
  const downloadPDF = () => {
    const input = resumeRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // Ширина A4 (мм)
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Авто масштабування
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf"); // Завантажуємо файл
    });
  };

  return (
    <div className="w-1/2 border p-6 bg-gray-100">
      <h2 className="text-xl font-bold">Попередній перегляд</h2>

      {/* Контейнер резюме (буде перетворений у PDF) */}
      <div
        ref={resumeRef}
        className={`resume-template ${template} p-4 bg-white`}
      >
        <h1 className="text-2xl font-bold">{data.fullName || "Ваше ім'я"}</h1>
        <p>Email: {data.email || "your@email.com"}</p>
        <p>Телефон: {data.phone || "+380 XX XXX XXXX"}</p>
        <h3 className="font-bold mt-2">Досвід роботи</h3>
        <p>{data.experience || "Опишіть свій досвід роботи тут..."}</p>
        <h3 className="font-bold mt-2">Освіта</h3>
        <p>{data.education || "Опишіть вашу освіту тут..."}</p>
      </div>

      {/* Кнопка загрузки PDF */}
      <button
        onClick={downloadPDF}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4"
      >
        Завантажити PDF
      </button>
    </div>
  );
};

export default ResumePreview;
