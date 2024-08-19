import React from "react";
import "./style.css";
import {
  FaGithub,
  FaLinkedin,
  FaCode // Using FaCode for LeetCode
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = () => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.leetcode && (
          <li>
            <a href={socialprofils.leetcode}>
              <FaCode />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
