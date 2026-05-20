import SearchBar from "@/components/DocSearchbar";
import DoctorListing from "@/components/DoctorListing";
import React from "react";

export default function doctorsPage() {
  return (
    <>
      <SearchBar></SearchBar>
      <DoctorListing></DoctorListing>
    </>
  );
}
