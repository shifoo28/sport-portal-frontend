import axios from "axios";

export const urlBack = "http://10.10.73.40/";

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
    const res = await fetch(urlBack + "main-page/Local");

    return (await res.json()).data;
  } catch (error) {
    throw error;
  }
}

export async function fetchVideoNews() {
  try {
    const res = await fetch(urlBack + "main-page/Video");

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

export async function fetchGymsClubsFilters() {
  try {
    const res = await fetch(urlBack + "gyms-and-clubs-page/filters?lang=Tm");

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
