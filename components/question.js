import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import { parseCookies } from "../lib/parseCookies";

const question = ({ name, link, rating, sno }) => {
    return (
        <tr>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {sno}
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                    {/* <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                            alt="" />
                    </div> */}
                    <div class="ml-4">
                        <div class="leading-5 text-gray-900">{name}
                        </div>
                        {/* <div class="text-sm leading-5 text-gray-500">john@example.com</div> */}
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <a href={link} target={'_blank'} class=" leading-5 text-blue-600 underline">{link}</a>
                {/* <div class="text-sm leading-5 text-gray-500">Web dev</div> */}
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <span
                    class="px-2 inline-flex  leading-5 font-semibold rounded-full bg-green-100 text-green-800">{rating}</span>
            </td>
            {/* <td
                class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                Owner</td>
            <td
                class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
            </td> */}
        </tr>
    );
}

question.getInitialProps = async ({ req }) => {
    const cookies = parseCookies(req);

    return {
        initialRememberValue: cookies.rememberMe
    };
};


export default question;