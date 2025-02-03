/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import { FaBars } from "react-icons/fa";
import {
  FileText,
  Receipt,
  Image,
  Download,
  Calendar,
  Clock,
  ArrowLeft,
} from "lucide-react";

const CompanyQuotation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const companyNames = ["TechCorp", "InnoSolutions", "FutureWorks", "AlphaTech"];
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleDownload = (type) => {
    console.log(`Downloading ${type}`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white p-4 shadow-md flex items-center justify-between">
          <img
            src="https://www.saisamarthpolytech.com/images/logo.png"
            alt="Sai Samarth Polytech"
            className="h-10 w-auto mr-4"
          />
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="text-gray-700 hover:text-gray-900 focus:outline-none lg:hidden"
          >
            <FaBars size={24} />
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-6 focus:outline-none"
          >
            <ArrowLeft className="w-6 h-6" />
            <span className="text-lg font-medium">Back</span>
          </button>

          {/* Company Cards */}
          <section className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-wide text-center">
              Trusted by Leading Companies
            </h2>
            <p className="text-lg text-gray-600 mb-6 text-center">
              We take pride in partnering with some of the most innovative and forward-thinking companies across industries.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {companyNames.map((company, index) => (
                <Link
                  to="/list"
                  key={index}
                  className="bg-gradient-to-br from-indigo-100 via-blue-50 to-blue-200 rounded-xl shadow-md p-6 hover:shadow-2xl hover:scale-105 transform transition-transform duration-300 ease-in-out"
                >
                  <h3 className="text-lg font-semibold text-gray-800 text-center">{company}</h3>
                  <p className="text-sm text-gray-500 text-center mt-2">Industry Leader</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Quotation Section */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 w-full max-w-4xl mx-auto mt-12 p-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Download Options</h2>
            <div className="flex justify-between text-gray-600 mb-6">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                <span className="font-medium">{currentDate}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6" />
                <span className="font-medium">{currentTime}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <button
                onClick={() => handleDownload("quotation")}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-300 hover:shadow-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
              >
                <FileText className="w-8 h-8 text-blue-600" />
                <span className="text-lg font-semibold text-gray-900">Quotation PDF</span>
                <Download className="w-6 h-6 text-gray-400" />
              </button>
              <button
                onClick={() => handleDownload("bill")}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-300 hover:shadow-lg hover:border-green-500 hover:bg-green-50 transition-all"
              >
                <Receipt className="w-8 h-8 text-green-600" />
                <span className="text-lg font-semibold text-gray-900">Bill PDF</span>
                <Download className="w-6 h-6 text-gray-400" />
              </button>
              <button
                onClick={() => handleDownload("media")}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-300 hover:shadow-lg hover:border-purple-500 hover:bg-purple-50 transition-all w-full"
              >
                <Image className="w-8 h-8 text-purple-600" />
                <span className="text-lg font-semibold text-gray-900">Media Files</span>
                <Download className="w-6 h-6 text-gray-400" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CompanyQuotation;
