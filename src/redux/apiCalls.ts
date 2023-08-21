export const urlBack = "http://localhost:3012/";

export async function fetchMain() {
  try {
    const res = await fetch(urlBack);

    return res.json();
  } catch (error) {
    throw error;
  }
}

export async function fetchLocalNews() {
  try {
    const res = await fetch(urlBack + "main-page/local");

    return res.json();
  } catch (error) {
    throw error;
  }
}

export async function fetchVideoNews() {
  try {
    const res = await fetch(urlBack + "main-page/video");

    return res.json();
  } catch (error) {
    throw error;
  }
}

export async function fetchFederations() {
  try {
    const res = await fetch(urlBack + "federation-page");

    return res.json();
  } catch (error) {
    throw error;
  }
}

export async function fetchFederationSports() {
  try {
    const res = await fetch(urlBack + "federation-page/sports");

    return res.json();
  } catch (error) {
    throw error;
  }
}
