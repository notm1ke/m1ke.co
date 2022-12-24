import qs from 'qs';
import axios from 'axios';

import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method && req.method !== 'GET')
        return res
            .status(405)
            .json({ message: 'Method not allowed' });

    let data = await axios
        .post('https://backronym.org/server/proccessInput.php', qs.stringify({ word: 'ILEFA' }))
        .then(res => res.data);

    return res
        .status(200)
        .json({ tagline: data });
}