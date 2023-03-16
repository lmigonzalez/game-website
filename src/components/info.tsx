/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import classNames from "classnames";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const Info = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [emailValue, setEmailValue] = useState("");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className={`${roboto.className} m-auto w-[1400px] max-w-full px-4 pb-24 leading-7 text-[#434040]`}
    >
      <h3 className={`mb-6 text-xl font-bold`}>About the drop</h3>
      <p className="mb-4">
        We are excited to announce that we are preparing to launch
        "Extraordinary Whales Club" project to give courage and dreams to many
        other Woo Young-Woos around the world and to share, enjoy and create
        with global Woo Young-Woo’s fans.
      </p>
      <p className="mb-4">
        Extraordinary Attorney Woo, a lawyer with autism spectrum disorder, is
        giving hope and courage to many people around the globe. It is none
        other than the many whales that always give strength, courage, and
        sometimes flashing ideas to Woo Young-Woo's somewhat difficult life.
      </p>
      <p className="mb-4">
        "Extraordinary Whales Club" is a social NFT project that aims to go
        beyond mere digital collectibles—collection holders can share, help, and
        participate with the community.
      </p>
      <p>
        Watch 2 Earn SBT - Screena is a decentralized preference certification
        project specializing in content. Users can watch content on platforms
        such as Netflix and YouTube and commemorate their viewing records with
        soulbound tokens. All holders who purchased the PFP sold by Crypto.com
        can get a special soulbound token that certifies they are true fans who
        have finished watching Woo Young-woo’s drama.
      </p>

      <h3 className={`mb-6 mt-12 text-xl font-bold`}>Utility</h3>
      <p className="mb-4">
        This drop features various utility items created by the artist:
      </p>
      <p className="mb-4">🪂 Watch 2 Earn @ Screena Soulbound NFT</p>
      <p className="mb-4">🗣 Token Gated Fan Club & Physical Merch</p>
      <p className="mb-4">🎗 Charity Donation</p>
      <p className="mb-4">
        {" "}
        <Link
          href="/"
          className="orange-gradient mb-4 bg-clip-text text-transparent"
        >
          CLICK HERE
        </Link>{" "}
        for full drop Terms & Conditions, including eligibility, snapshot, and
        selection specifics for additional features or perks that can be
        unlocked by holders of the NFT. Terms also include instructions on how
        to contact the project creator for utility inquiries.
      </p>
      <span
        className={`${roboto.className} text-sm font-bold leading-7 text-black`}
      >
        We are responsible for the minting, custody, and operation of the
        platform to allow the buying and selling of NFTs. Crypto.com accepts no
        responsibility in respect of the operation of the giveaway nor the
        quality and/or distribution of prizes or items attached which shall be
        the sole responsibility of the Contributor. The Terms and Conditions of
        the giveaway shall be a binding agreement between you and the
        Contributor only, and you accept that Crypto.com shall incur no
        liability in relation to the terms attached.
      </span>

      <h3 className={`mb-6 mt-12 text-xl font-bold`}>About the creator</h3>

      <p className="mb-4">
        THE MOST INNOVATIVE GLOBAL CONTENTS STUDIO,{" "}
        <span className="font-bold text-black">ASTORY</span>
      </p>
      <p>
        <span className="font-bold text-black">ASTORY</span> was founded on the
        belief that a single content could convey so much more than just
        entertainment and a heartwarming story.
      </p>
      <p>
        We now strive to go beyond Asia and become a content studio loved by the
        whole world, like the most famous shows like "Kingdom" & "Extraordinary
        Attorney Woo".
      </p>

      <div>
        <h3 className={`mb-3 mt-12 text-xl font-bold`}>Never miss a drop</h3>
        <p className="mb-3">
          Subscribe and we’ll notify you when a drop is about to go live.
        </p>

        <form>
          <div className="flex h-12 w-[452px] max-w-full ">
            <input
              className="h-full w-3/4 rounded-l-md border-[1px] border-solid border-[#3C3939] bg-[#EFEFEF]  pl-4"
              type="email"
              placeholder="Email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <button
              type="submit"
              className="flex w-1/4 items-center justify-center rounded-r-md text-center text-white"
              style={{
                background:
                  "linear-gradient(92.48deg, #d80027 2.08%, #fb9e3c 117.25%)",
              }}
            >
              Subscribe
            </button>
          </div>

          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              className=" checkbox checkbox-sm mr-3 rounded border-solid border-[#3C3939] bg-[#F1F1F1]"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label>
              By subscribing, you agree to accept the terms of our{" "}
              <Link
                href="/"
                className="orange-gradient mb-4 bg-clip-text text-transparent"
              >
                Privacy Notice.
              </Link>{" "}
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
