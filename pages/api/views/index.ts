import { queryBuilder } from 'lib/planetscale';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await queryBuilder
      .selectFrom('views')
      .select(['slug', 'count'])
      .execute();
    console.log('/api/views')
    console.log({data})
    console.log({data})

    // data

  // {
  //   data: [
  //     { slug: 'backend', count: 1 },
  //     { slug: 'backend', count: 1 },
  //     { slug: 'backend', count: 1 },
  //     { slug: 'backend', count: 1 },
  //     { slug: 'backend', count: 1 },
  //     { slug: 'backend', count: 1 },
  //     { slug: 'backend', count: 1 },
  //     { slug: 'backend', count: 1 },
  //     { slug: 'backend', count: 1 },
  //     { slug: 'career', count: 1 },
  //     { slug: 'career', count: 1 },
  //     { slug: 'career', count: 1 },
  //     { slug: 'hello-world', count: 1 },
  //     { slug: 'hello-world', count: 1 },
  //     { slug: 'career', count: 1 },
  //     { slug: 'hello-world', count: 1 },
  //     { slug: 'hello-world', count: 1 },
  //     { slug: 'career', count: 1 },
  //     { slug: 'career', count: 1 },
  //     { slug: 'career', count: 1 }
  //   ]
  // }


  return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
}
