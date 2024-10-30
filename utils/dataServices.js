"use server";

const url = "http://localhost:3000/api/v1/q&a";
export async function getAllData() {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
