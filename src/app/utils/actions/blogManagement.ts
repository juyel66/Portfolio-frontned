"use server";

export const addBlog = async (data: Record<string, unknown>) => {
  const res = await fetch(`${process.env.BACKEND_URL}/blogs/add-blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const blogInfo = await res.json();
  return blogInfo;
};
export const getAllBlog = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/blogs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  return res.json();
};

export const DeleteBlog = async (data: Record<string, unknown>) => {
  const res = await fetch(`${process.env.BACKEND_URL}/blogs/delete-blog`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const blogInfo = await res.json();
  return blogInfo;
};
