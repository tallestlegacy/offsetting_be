import { json } from "@sveltejs/kit";

export async function GET() {
	const query = `
    *[_type == 'project']{
        'heroImageUrl' : hero.asset -> url,
        _id,
        title,
        locationName,
        lon,
        lat,
        createdDate,
        description,
        story,
        requiredFunds,
        allocatedFunds
      }
    `;
	const res = await fetch(`https://hqypioh7.api.sanity.io/v2021-10-21/data/query/projects?query=${query}`);
	const data = await res.json();

	const projects = data.result;

	return json(projects);
}
