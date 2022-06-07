export default async function handler(req, res) {
    const { email, name, message } = JSON.parse(req.body);
    console.log(email);
    if (!email || !name || !message) {
        return res.status(400).json({ error: 'Missing field try again!' });
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'method Not allowed' });
    }

    // make request to airtable
    const request = await fetch('https://api.airtable.com/v0/appQjTgEWUCy33XsV/submissions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.AIRTABLE_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fields: { name, email, message } })
    });
    if (request.ok) {
        return res.status(200).json({ data: 'ok' });
    }
    return res.status(400).json({ error: 'error' });
}
