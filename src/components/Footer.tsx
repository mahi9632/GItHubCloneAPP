import React from "react";
import { AiFillGithub } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <footer>
      <nav
        style={{
          marginTop: "40px",
          padding: "20px 16px",
          fontSize: "12px",
          color: "#57606a",
          textAlign: "center",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <AiFillGithub size={20} color="#1f2328" />
        <span> © 2026 GitHub, Inc. </span>{" "}
        <a href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service">
          Terms
        </a>{" "}
        <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">
          Privacy
        </a>{" "}
        <a href="https://github.com/security">Security</a>{" "}
        <a href="https://www.githubstatus.com/">Status</a>{" "}
        <a href="https://github.community/">Community</a>{" "}
        <a href="https://docs.github.com/">Docs</a>{" "}
        <a href="https://support.github.com/">Contact</a>{" "}
        <a href="https://github.com/settings/cookies">Manage cookies</a>{" "}
        <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">
          Do not share my personal information
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
