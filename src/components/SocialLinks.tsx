export default function SocialLinks({ isCol = false }) {
  return (
    <>
      {isCol ? (
        <div className={`flex space-x-4 flex-col space-y-2 *:text-sm`}>
          <div className="flex items-center *:mr-2 *:font-medium *:text-gray-900">
            <a
              href="https://github.com/dev-rygar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-6 w-6 md:h-8 md:w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                />
              </svg>
            </a>
            <p>Github</p>
          </div>
          <div className="flex items-center *:mr-2 *:font-medium *:text-gray-900">
            <a
              href="https://www.linkedin.com/in/tjgarry/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-6 w-6 md:h-8 md:w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
              </svg>
            </a>
            <p>LinkedIn</p>
          </div>
          <div className="flex items-center *:mr-2 *:font-medium *:text-gray-800">
            <a
              href="https://www.codewars.com/users/dev-rygar/completed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-6 w-6 md:h-8 md:w-8"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 24 24"
              >
                <path d="M 7 3 C 4.79 3 3 4.79 3 7 L 3 17 C 3 19.21 4.79 21 7 21 L 17 21 C 19.21 21 21 19.21 21 17 L 21 7 C 21 4.79 19.21 3 17 3 L 7 3 z M 11.564453 6.015625 C 11.709654 6.0045879 11.857203 6.004625 12.001953 6.015625 C 12.910953 6.061625 13.743656 6.5551406 14.222656 7.2441406 C 14.255656 7.2441406 14.288266 7.2382812 14.322266 7.2382812 C 15.522266 7.2272812 16.681594 7.9608125 17.183594 9.0078125 C 17.597594 9.8178125 17.587469 10.786875 17.230469 11.546875 C 17.247469 11.575875 17.269156 11.600859 17.285156 11.630859 C 17.894156 12.664859 17.838594 14.034188 17.183594 14.992188 C 16.688594 15.756187 15.844813 16.231734 15.007812 16.302734 C 14.991812 16.331734 14.979891 16.362625 14.962891 16.390625 C 14.371891 17.435625 13.156047 18.072375 11.998047 17.984375 C 11.089047 17.938375 10.256344 17.444859 9.7773438 16.755859 C 9.7443438 16.755859 9.7117344 16.761719 9.6777344 16.761719 C 8.4777344 16.772719 7.3184063 16.039187 6.8164062 14.992188 C 6.4024063 14.182187 6.4125313 13.213125 6.7695312 12.453125 C 6.7525312 12.424125 6.7308437 12.399141 6.7148438 12.369141 C 6.1058438 11.335141 6.1604062 9.9658125 6.8164062 9.0078125 C 7.3114063 8.2438125 8.1551875 7.7682656 8.9921875 7.6972656 C 9.0081875 7.6682656 9.0201094 7.638375 9.0371094 7.609375 C 9.5542344 6.695 10.548045 6.0928848 11.564453 6.015625 z M 12 7.2675781 C 11.285 7.3515781 10.652172 7.7564687 10.326172 8.3554688 C 9.9941719 8.9394687 9.9520938 9.6870313 10.246094 10.332031 C 10.449094 10.789031 10.820547 11.181984 11.310547 11.458984 C 11.320547 11.446984 11.331797 11.435828 11.341797 11.423828 C 11.029797 10.683828 11.032547 9.7621406 11.435547 8.9941406 C 11.777547 8.2861406 12.416156 7.7351719 13.160156 7.4511719 C 12.779156 7.2921719 12.381 7.2265781 12 7.2675781 z M 8.640625 8.7226562 C 8.312625 8.9726562 8.0573438 9.2847656 7.9023438 9.6347656 C 7.6173437 10.296766 7.6498594 11.044953 8.0058594 11.626953 C 8.3458594 12.206953 8.9746875 12.615594 9.6796875 12.683594 C 10.176687 12.736594 10.700547 12.612125 11.185547 12.328125 C 11.179547 12.312125 11.168109 12.29825 11.162109 12.28125 C 10.368109 12.17925 9.5782344 11.716328 9.1152344 10.986328 C 8.6732344 10.336328 8.514625 9.5096563 8.640625 8.7226562 z M 14.320312 8.7285156 C 13.647312 8.7335156 12.979359 9.0714375 12.568359 9.6484375 C 12.275359 10.049437 12.123 10.560187 12.125 11.117188 C 12.142 11.119188 12.158781 11.130766 12.175781 11.134766 C 12.660781 10.497766 13.456312 10.043812 14.320312 10.007812 C 15.104313 9.9498125 15.900531 10.227469 16.519531 10.730469 C 16.466531 10.321469 16.324609 9.9437656 16.099609 9.6347656 C 15.668609 9.0577656 15.003312 8.7115156 14.320312 8.7285156 z M 13.943359 11.308594 C 13.563578 11.334422 13.178203 11.458875 12.814453 11.671875 C 12.821453 11.687875 12.831891 11.70175 12.837891 11.71875 C 13.631891 11.82075 14.421766 12.283672 14.884766 13.013672 C 15.326766 13.663672 15.485375 14.490344 15.359375 15.277344 C 15.687375 15.027344 15.942656 14.715234 16.097656 14.365234 C 16.382656 13.703234 16.350141 12.955047 15.994141 12.373047 C 15.654141 11.793047 15.025312 11.384406 14.320312 11.316406 C 14.196063 11.303156 14.069953 11.299984 13.943359 11.308594 z M 12.689453 12.541016 C 12.679453 12.553016 12.668203 12.564172 12.658203 12.576172 C 12.971203 13.316172 12.967453 14.237859 12.564453 15.005859 C 12.222453 15.713859 11.583844 16.264828 10.839844 16.548828 C 11.220844 16.707828 11.618047 16.773422 11.998047 16.732422 C 12.713047 16.648422 13.347828 16.243531 13.673828 15.644531 C 14.005828 15.060531 14.045953 14.312969 13.751953 13.667969 C 13.549953 13.210969 13.179453 12.818016 12.689453 12.541016 z M 11.824219 12.865234 C 11.339219 13.502234 10.543687 13.956188 9.6796875 13.992188 C 8.8956875 14.050187 8.0994687 13.772531 7.4804688 13.269531 C 7.5334687 13.678531 7.6753906 14.056234 7.9003906 14.365234 C 8.3313906 14.942234 8.9957344 15.288484 9.6777344 15.271484 C 10.351734 15.266484 11.020641 14.928562 11.431641 14.351562 C 11.724641 13.950563 11.877 13.439813 11.875 12.882812 C 11.858 12.880812 11.841219 12.869234 11.824219 12.865234 z"></path>
              </svg>
            </a>
            <p>Codewars</p>
          </div>
        </div>
      ) : (
        <div className={`flex space-x-4`}>
          <a
            href="https://github.com/dev-rygar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-6 w-6 md:h-8 md:w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/tjgarry/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-6 w-6 md:h-8 md:w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
            </svg>
          </a>

          <a
            href="https://www.codewars.com/users/dev-rygar/completed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="h-6 w-6 md:h-8 md:w-8"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 24 24"
            >
              <path d="M 7 3 C 4.79 3 3 4.79 3 7 L 3 17 C 3 19.21 4.79 21 7 21 L 17 21 C 19.21 21 21 19.21 21 17 L 21 7 C 21 4.79 19.21 3 17 3 L 7 3 z M 11.564453 6.015625 C 11.709654 6.0045879 11.857203 6.004625 12.001953 6.015625 C 12.910953 6.061625 13.743656 6.5551406 14.222656 7.2441406 C 14.255656 7.2441406 14.288266 7.2382812 14.322266 7.2382812 C 15.522266 7.2272812 16.681594 7.9608125 17.183594 9.0078125 C 17.597594 9.8178125 17.587469 10.786875 17.230469 11.546875 C 17.247469 11.575875 17.269156 11.600859 17.285156 11.630859 C 17.894156 12.664859 17.838594 14.034188 17.183594 14.992188 C 16.688594 15.756187 15.844813 16.231734 15.007812 16.302734 C 14.991812 16.331734 14.979891 16.362625 14.962891 16.390625 C 14.371891 17.435625 13.156047 18.072375 11.998047 17.984375 C 11.089047 17.938375 10.256344 17.444859 9.7773438 16.755859 C 9.7443438 16.755859 9.7117344 16.761719 9.6777344 16.761719 C 8.4777344 16.772719 7.3184063 16.039187 6.8164062 14.992188 C 6.4024063 14.182187 6.4125313 13.213125 6.7695312 12.453125 C 6.7525312 12.424125 6.7308437 12.399141 6.7148438 12.369141 C 6.1058438 11.335141 6.1604062 9.9658125 6.8164062 9.0078125 C 7.3114063 8.2438125 8.1551875 7.7682656 8.9921875 7.6972656 C 9.0081875 7.6682656 9.0201094 7.638375 9.0371094 7.609375 C 9.5542344 6.695 10.548045 6.0928848 11.564453 6.015625 z M 12 7.2675781 C 11.285 7.3515781 10.652172 7.7564687 10.326172 8.3554688 C 9.9941719 8.9394687 9.9520938 9.6870313 10.246094 10.332031 C 10.449094 10.789031 10.820547 11.181984 11.310547 11.458984 C 11.320547 11.446984 11.331797 11.435828 11.341797 11.423828 C 11.029797 10.683828 11.032547 9.7621406 11.435547 8.9941406 C 11.777547 8.2861406 12.416156 7.7351719 13.160156 7.4511719 C 12.779156 7.2921719 12.381 7.2265781 12 7.2675781 z M 8.640625 8.7226562 C 8.312625 8.9726562 8.0573438 9.2847656 7.9023438 9.6347656 C 7.6173437 10.296766 7.6498594 11.044953 8.0058594 11.626953 C 8.3458594 12.206953 8.9746875 12.615594 9.6796875 12.683594 C 10.176687 12.736594 10.700547 12.612125 11.185547 12.328125 C 11.179547 12.312125 11.168109 12.29825 11.162109 12.28125 C 10.368109 12.17925 9.5782344 11.716328 9.1152344 10.986328 C 8.6732344 10.336328 8.514625 9.5096563 8.640625 8.7226562 z M 14.320312 8.7285156 C 13.647312 8.7335156 12.979359 9.0714375 12.568359 9.6484375 C 12.275359 10.049437 12.123 10.560187 12.125 11.117188 C 12.142 11.119188 12.158781 11.130766 12.175781 11.134766 C 12.660781 10.497766 13.456312 10.043812 14.320312 10.007812 C 15.104313 9.9498125 15.900531 10.227469 16.519531 10.730469 C 16.466531 10.321469 16.324609 9.9437656 16.099609 9.6347656 C 15.668609 9.0577656 15.003312 8.7115156 14.320312 8.7285156 z M 13.943359 11.308594 C 13.563578 11.334422 13.178203 11.458875 12.814453 11.671875 C 12.821453 11.687875 12.831891 11.70175 12.837891 11.71875 C 13.631891 11.82075 14.421766 12.283672 14.884766 13.013672 C 15.326766 13.663672 15.485375 14.490344 15.359375 15.277344 C 15.687375 15.027344 15.942656 14.715234 16.097656 14.365234 C 16.382656 13.703234 16.350141 12.955047 15.994141 12.373047 C 15.654141 11.793047 15.025312 11.384406 14.320312 11.316406 C 14.196063 11.303156 14.069953 11.299984 13.943359 11.308594 z M 12.689453 12.541016 C 12.679453 12.553016 12.668203 12.564172 12.658203 12.576172 C 12.971203 13.316172 12.967453 14.237859 12.564453 15.005859 C 12.222453 15.713859 11.583844 16.264828 10.839844 16.548828 C 11.220844 16.707828 11.618047 16.773422 11.998047 16.732422 C 12.713047 16.648422 13.347828 16.243531 13.673828 15.644531 C 14.005828 15.060531 14.045953 14.312969 13.751953 13.667969 C 13.549953 13.210969 13.179453 12.818016 12.689453 12.541016 z M 11.824219 12.865234 C 11.339219 13.502234 10.543687 13.956188 9.6796875 13.992188 C 8.8956875 14.050187 8.0994687 13.772531 7.4804688 13.269531 C 7.5334687 13.678531 7.6753906 14.056234 7.9003906 14.365234 C 8.3313906 14.942234 8.9957344 15.288484 9.6777344 15.271484 C 10.351734 15.266484 11.020641 14.928562 11.431641 14.351562 C 11.724641 13.950563 11.877 13.439813 11.875 12.882812 C 11.858 12.880812 11.841219 12.869234 11.824219 12.865234 z"></path>
            </svg>
          </a>
        </div>
      )}
    </>
  );
}
