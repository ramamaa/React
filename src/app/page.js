import { Box, Round } from "./components";

const Home = () => {
  return (
    // <div className="p-[32px] w-[411px] h-[480px] bg-gray-900 rounded-3xl shadow-2xl ring-1 ring-gray-900/10 sm:p-10">
    //   <div className="flex-column">
    //     <h1 className="text-purple-700">Enterprise</h1>
    //     <div className="flex items-end gap-1">
    //       <p className="text-white text-[48px] leading-12">$99</p>
    //       <p className="text-gray-500 text-6">/month</p>
    //     </div>
    //     <p className="text-white">
    //       Dedicated support and infrastructure for your company.
    //     </p>
    //   </div>
    //   <ul className="text-white">
    //     <li className="flex" >
    //       <svg
    //         viewBox="0 0 20 20"
    //         fill="currentColor"
    //         data-slot="icon"
    //         aria-hidden="true"
    //         class="h-6 w-5 flex-none text-indigo-400"
    //       >
    //         <path
    //           d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
    //           clipRule="evenodd"
    //           fillRule="evenodd"
    //         ></path>
    //       </svg>
    //       Unlimited products
    //     </li>
    //     <li>
    //       <svg
    //         viewBox="0 0 20 20"
    //         fill="currentColor"
    //         data-slot="icon"
    //         aria-hidden="true"
    //         class="h-6 w-5 flex-none text-indigo-400"
    //       >
    //         <path
    //           d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
    //           clipRule="evenodd"
    //           fillRule="evenodd"
    //         ></path>
    //       </svg>
    //       Unlimited subscribers
    //     </li>
    //     <li>
    //       <svg
    //         viewBox="0 0 20 20"
    //         fill="currentColor"
    //         data-slot="icon"
    //         aria-hidden="true"
    //         class="h-6 w-5 flex-none text-indigo-400"
    //       >
    //         <path
    //           d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
    //           clipRule="evenodd"
    //           fillRule="evenodd"
    //         ></path>
    //       </svg>
    //       Advanced analytics
    //     </li>
    //     <li>
    //       <svg
    //         viewBox="0 0 20 20"
    //         fill="currentColor"
    //         data-slot="icon"
    //         aria-hidden="true"
    //         class="h-6 w-5 flex-none text-indigo-400"
    //       >
    //         <path
    //           d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
    //           clipRule="evenodd"
    //           fillRule="evenodd"
    //         ></path>
    //       </svg>
    //       Dedicated support representative
    //     </li>
    //     <li>
    //       <svg
    //         viewBox="0 0 20 20"
    //         fill="currentColor"
    //         data-slot="icon"
    //         aria-hidden="true"
    //         class="h-6 w-5 flex-none text-indigo-400"
    //       >
    //         <path
    //           d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
    //           clipRule="evenodd"
    //           fillRule="evenodd"
    //         ></path>
    //       </svg>
    //       Marketing automations
    //     </li>
    //     <li>
    //       <svg
    //         viewBox="0 0 20 20"
    //         fill="currentColor"
    //         data-slot="icon"
    //         aria-hidden="true"
    //         class="h-6 w-5 flex-none text-indigo-400"
    //       >
    //         <path
    //           d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
    //           clipRule="evenodd"
    //           fillRule="evenodd"
    //         ></path>
    //       </svg>
    //       Custom integrations
    //     </li>
    //   </ul>
    //   <button className="text-white">Get started today</button>
    <div className="flex flex-col gap-2.5">
      <Box img="blitz.avif"></Box>
      <Round description="Man can be destroyed but not Defeated"></Round>
      <div></div>
      <Box></Box>
      <Box></Box>
      <Round></Round>
      <Box></Box>
    </div>
  );
};

export default Home;
