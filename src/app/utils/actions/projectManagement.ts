"use server";

export const addProject = async (data: Record<string, unknown>) => {
  // console.log("function =>", data);
  const res = await fetch(`https://blog-and-portfilio-backend.vercel.app/api/projects/add-project`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const projcetInfo = await res.json();
  return projcetInfo;
};

export const getAllProject = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  return res.json();
};

export const DeleteProject = async (data: Record<string, unknown>) => {
  const res = await fetch(`${process.env.BACKEND_URL}/projects/delete-project`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const projectInfo = await res.json();
  return projectInfo;
};
