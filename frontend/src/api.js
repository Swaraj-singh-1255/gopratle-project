const API_URL = "http://localhost:5000";

export async function createRequirement(payload) {
  const res = await fetch(`${API_URL}/api/requirements`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(data?.message || "Something went wrong. Try again.");
  }

  return data;
}
