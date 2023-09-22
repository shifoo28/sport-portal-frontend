import axios from "axios";

export const urlBack = "http://localhost:3012/";

// GETTERS
export async function fetchMain() {
  try {
    const res = await fetch(urlBack);

    return (await res.json()).data;
  } catch (error) {
    throw error;
  }
}

export async function fetchLocalNews() {
  try {
    const res = await fetch(urlBack + "main-page/local");

    return (await res.json()).data;
  } catch (error) {
    throw error;
  }
}

export async function fetchVideoNews() {
  try {
    const res = await fetch(urlBack + "main-page/video");

    return (await res.json()).data;
  } catch (error) {
    throw error;
  }
}

export async function fetchFederations() {
  try {
    const res = await fetch(urlBack + "federation-page");

    return (await res.json()).data;
  } catch (error) {
    throw error;
  }
}

export async function fetchFederationSports() {
  try {
    const res = await fetch(urlBack + "federation-page/sports");

    return (await res.json()).data;
  } catch (error) {
    throw error;
  }
}

export async function fetchFederationTrainers() {
  try {
    const res = await fetch(urlBack + "federation-page/trainers");

    return (await res.json()).data;
  } catch (error) {
    throw error;
  }
}

export async function fetchFederationAthletes() {
  try {
    const res = await fetch(urlBack + "federation-page/athletes");

    return (await res.json()).data;
  } catch (error) {
    throw error;
  }
}

export async function fetchHCDepartments() {
  try {
    const res = await fetch(urlBack + "federation-page/health_care");

    return (await res.json()).data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCompetitions() {
  try {
    const res = await fetch(urlBack + "competition-page");

    return (await res.json()).data;
  } catch (error) {
    throw error;
  }
}

// SETTERS
export async function patchNewsDetailsViews(id: string, categoryId: string) {
  try {
    const res = await axios.patch(urlBack + "news-details/" + id, null, {
      params: { categoryId },
    });

    return res.data;
  } catch (error) {
    throw error;
  }
}
