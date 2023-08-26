import React from "react";
import { Card } from "./Card";
import { CardBody } from "./CardBody";

type Props = {};

export const LinkDetails = (props: Props) => {
  return (
    <Card bg="gray-50" className="mt-6">
      <CardBody>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="6"
              fill="none"
              viewBox="0 0 12 6"
            >
              <path fill="#737373" d="M0 0h12v1H0zM0 5h12v1H0z" />
            </svg>
            <p className="font-bold text-gray-500">Link #1</p>
          </div>
          <button className="bg-transparent rounded-md focus:ring-2 focus:ring-primary-300 text-gray-500">
            Remove
          </button>
        </div>
        <div className="flex flex-col mt-2 mb-3">
          <label className="text-sm mb-1">Platform</label>
          <div className="relative">
            <select className="form-input border-2 border-gray-200 rounded-md py-3 px-4 pl-9 bg-white placeholder-gray-400 text-gray-900 appearance-none w-full block focus:outline-none focus:ring-2 focus:ring-primary-500 focus:shadow-custom">
              <option value="linkedin">LinkedIn</option>
              <option value="twitter">Twitter</option>
              <option value="github">GitHub</option>
              <option value="devto">Dev.to</option>
              <option value="gitlab">GitLab</option>
              <option value="youtube">YouTube</option>
              <option value="facebook">Facebook</option>
              <option value="twitch">Twitch</option>
              <option value="codewars">Codewars</option>
              <option value="codepen">Codepen</option>
              <option value="freecodecamp">FreeCodeCamp</option>
              <option value="hashnode">Hashnode</option>
              <option value="frontendmentor">Frontend Mentor</option>
              <option value="stackoverflow">Stack Overflow</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="9"
                fill="none"
                viewBox="0 0 14 9"
              >
                <path stroke="#633CFF" strokeWidth="2" d="m1 1 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <label className="relative block mb-1">
            <span className="text-sm">Link</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute top-2/4 transform translate-y-1 left-3"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 16 16"
            >
              <path
                fill="#737373"
                d="M8.523 11.72a.749.749 0 0 1 0 1.063l-.371.371A3.751 3.751 0 1 1 2.847 7.85l1.507-1.506A3.75 3.75 0 0 1 9.5 6.188a.753.753 0 0 1-1 1.125 2.25 2.25 0 0 0-3.086.091L3.908 8.91a2.25 2.25 0 0 0 3.183 3.183l.37-.371a.748.748 0 0 1 1.062 0Zm4.63-8.874a3.756 3.756 0 0 0-5.305 0l-.371.37A.751.751 0 1 0 8.539 4.28l.372-.37a2.25 2.25 0 0 1 3.182 3.182l-1.507 1.507a2.25 2.25 0 0 1-3.086.09.753.753 0 0 0-1 1.125 3.75 3.75 0 0 0 5.144-.152l1.507-1.507a3.756 3.756 0 0 0 .002-5.307v-.001Z"
              />
            </svg>
            <input
              type="text"
              placeholder="e.g. https://www.github.com/joelynn94"
              className="form-input border-2 border-gray-200 rounded-md py-3 px-4 pl-9 bg-white placeholder-gray-400 text-gray-900 appearance-none w-full block focus:outline-none focus:ring-2 focus:ring-primary-500 focus:shadow-custom"
            />
          </label>
        </div>
      </CardBody>
    </Card>
  );
};
