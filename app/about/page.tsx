import Image from "next/image";

export default function About() {
  return <div className="relative flex flex-wrap place-items-center justify-between w-full max-w-4xl">
    <div className="px-4 flex justify-between flex-col">
      <h1 className="text-2xl py-3">About</h1>
      <div>
        <div className="py-2">Author: Kira Yang</div>
        <div className="py-2">Github: <a href="https://github.com/wyang36" target="blank">https://github.com/wyang36</a></div>
        <div className="py-2">
          Shout outs:
          <ul className="list-disc py-1">
            <li><a href="https://thispersondoesnotexist.com/" target="blank">thispersondoesnotexist.com</a></li>
            <li><a href="https://www.reddit.com/r/MachineLearning/comments/i1aafb/p_i_trained_a_gan_to_generate_photorealistic_fake/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" target="blank">This reddit post [NSFW:18+]</a></li>
            <li><a href="https://arxiv.org/abs/1812.04948" target="_blank">StyleGAN</a></li>
            <li><a href="https://nvlabs.github.io/stylegan3/">StyleGAN3</a></li>
          </ul>
        </div>
      </div>
    </div>

    <Image
      src="/images/cat_collage.png"
      className="rounded-2xl"
      alt="cat pic collage"
      width={512}
      height={512}
      priority
    />
  </div>;
}