import { LAUNCH_API_URL } from "../config";

const fetchAllLaunches = async () => {
  try {
    const response = await fetch(LAUNCH_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: {},
        options: {
          select: {
            name: 1,
            success: 1,
            "links.patch.small": 1,
            date_local: 1,
          },
          pagination: false,
        },
      }),
    });
    const data = await response.json();
    return data.docs;
  } catch (error) {
    throw error;
  }
};

const fetchLaunchDetails = async (id) => {
  try {
    const response = await fetch(LAUNCH_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: {
          _id: id,
        },
        options: {
          select: {
            name: 1,
            success: 1,
            "links.patch": 1,
            "links.wikipedia": 1,
            details: 1,
          },
          populate: [
            {
              path: "rocket",
              select: {
                name: 1,
                stages: 1,
                boosters: 1,
                cost_per_launch: 1,
                success_rate_pct: 1,
                description: 1,
                wikipedia: 1,
                flickr_images: 1,
              },
            },
            {
              path: "payloads",
              select: {
                name: 1,
                type: 1,
                mass_kg: 1,
                regime: 1,
                lifespan_years: 1,
              },
            },
            {
              path: "launchpad",
              select: {
                name: 1,
                locality: 1,
                region: 1,
              },
            },
          ],
        },
      }),
    });
    const data = await response.json();
    return data.docs[0];
  } catch (error) {
    throw error;
  }
};

export { fetchLaunchDetails, fetchAllLaunches };
