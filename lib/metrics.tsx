import 'server-only';

import { Octokit } from '@octokit/rest';
import { queryBuilder } from 'lib/planetscale';
import { cache } from 'react';
import {log} from "util";

export const getBlogViews = cache(async () => {
  if (!process.env.DATABASE_URL) {
    return 10;
  }

  const data = await queryBuilder
    .selectFrom('views')
    .select(['count'])
    .execute();

  return data.reduce((acc, curr) => acc + Number(curr.count), 0);
});

export async function getTweetCount() {
  if (!process.env.TWITTER_API_TOKEN) {
    return 20;
  }

  try {
    const response = await fetch(
        `https://api.twitter.com/2/users/me`,
        {
          headers: {
            Authorization: `Bearer ${process.env.TWITTER_API_TOKEN}`,
          },
        }
    );

    const { data } = await response.json();
    console.log("tweet data",data);
    console.log("tweet data",data)
    console.log("tweet data",data)
    if (!data) { return 0 ;}

    return Number(data.public_metrics.tweet_count);
  } catch(error) {
    // Poor, no money to pay for twitter v2 api so let's return 0
    console.log(error);
  }

}

export const getStarCount = cache(async () => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  const req = await octokit.request('GET /repos/{owner}/{repo}', {
    owner: 'mynhinguyentruong',
    repo: 'white-label-demo',
  });

  return req.data.stargazers_count;
});
