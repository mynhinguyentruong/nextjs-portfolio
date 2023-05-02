import type { Metadata } from 'next';
import {
    GitHubIcon,
    YoutubeIcon,
    ArrowIcon,
    TwitterIcon,
} from 'components/icons';

export const metadata: Metadata = {
    title: 'About',
    description: 'A Developer that build cool stuffs and love Next.js.',
};

export default function AboutPage() {
    return (
        <section>
            <h1 className="font-bold text-3xl font-serif">About Me</h1>
            <p className="my-5 text-neutral-800 dark:text-neutral-200">
                Hey, I'm Nhi.
            </p>
            <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
                <p>
                    I'm currently building <b>a tool</b> that will help <b>International Students</b> that just came to <b>Canada</b> to find a <b>part-time job</b> that can provide them with <b>financial support.</b>
                </p>
                <hr />
                <p>
                    I like to try out different technology and build cool stuffs from it. I usually ask WTF is this bug and try all possible way to smash it. Currently learning Rust and Elixir at the same time because <b>concurrency and parallelism</b> are intriguing me <b>A LOT.</b>
                </p>
                <p>
                    I <b>love</b> building for the web. The web
                    is incredible. Anyone can become a developer, writer, or creator – and
                    no one has to ask for permission. You can just build.
                </p>
                <p className="mb-8">
                    Beside coding, I try to find good companies to invest in longterm. I like to talk about long-term investment and how you can leverage your TFSA account so that maybe 10 years from now, you can withdraw money from it completely tax free!
                </p>
                <div className="flex flex-col gap-2 md:flex-row md:gap-2">
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://twitter.com/ymihn1"
                        className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
                    >
                        <div className="flex items-center">
                            <TwitterIcon />
                            <div className="ml-3">Twitter</div>
                        </div>
                        <ArrowIcon />
                    </a>
                    <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/mynhinguyentruong"
                        className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
                    >
                        <div className="flex items-center">
                            <GitHubIcon />
                            <div className="ml-3">GitHub</div>
                        </div>
                        <ArrowIcon />
                    </a>

                </div>
            </div>
        </section>
    );
}
