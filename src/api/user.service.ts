import { Member } from "@/models/user";
export async function fetchUserByCardId(memberId: number): Promise<Member | null> {
  try {
    const base_url = import.meta.env.VITE_API_URL;
    const response = await fetch(`${base_url}/member-fetch/${memberId}`);
    if (!response.ok) {
      throw new Error(`Network response was not ok (status: ${response.status})`);
    }
    if (response.status === 204) {
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}

export async function UpdateUserByCardId(memberId: number): Promise<Member | null> {
  try {
    const base_url = import.meta.env.VITE_API_URL;
    const response = await fetch(`${base_url}/member-print/${memberId}`);

    if (!response.ok) {
      throw new Error(`Network response was not ok (status: ${response.status})`);
    }
    if (response.status === 204) {
      return null;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}
