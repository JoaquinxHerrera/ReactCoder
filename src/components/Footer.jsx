import React from 'react';
import "./styles.css";

function Footer() {
  return (
    <div className='footer'>
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link" aria-current="page" href="https://twitter.com/?lang=es" target="_blank">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.802 2.30603H45.162L29.082 20.686L48 45.692H33.188L21.588 30.524L8.312 45.692H0.948L18.148 26.032L0 2.30803H15.188L25.674 16.172L37.802 2.30603ZM35.22 41.288H39.298L12.972 6.48003H8.596L35.22 41.288Z" fill="black"/>
                    </svg>
                </a>
            </li>
            <li >
                <a class="nav-link" href="#">
                    <svg viewBox="0 0 46 46" fill="none" xmlns="https://www.instagram.com/" target="_blank">
                        <path d="M24.9703 3.83524C26.369 3.82988 27.7676 3.84393 29.1659 3.87741L29.5377 3.89083C29.9671 3.90616 30.3907 3.92533 30.9024 3.94833C32.9417 4.04416 34.3332 4.36616 35.5542 4.83958C36.8192 5.32641 37.8848 5.98574 38.9505 7.05141C39.9249 8.00899 40.679 9.16731 41.1604 10.4458C41.6338 11.6667 41.9558 13.0602 42.0517 15.0995C42.0747 15.6093 42.0938 16.0348 42.1092 16.4642L42.1207 16.836C42.1547 18.2336 42.1694 19.6316 42.1647 21.0297L42.1667 22.4595V24.9703C42.1714 26.369 42.1567 27.7677 42.1226 29.1659L42.1111 29.5377C42.0957 29.9671 42.0766 30.3907 42.0536 30.9024C41.9577 32.9417 41.6319 34.3332 41.1604 35.5542C40.6806 36.834 39.9263 37.9933 38.9505 38.9505C37.9921 39.9248 36.8332 40.6789 35.5542 41.1604C34.3332 41.6338 32.9417 41.9558 30.9024 42.0517C30.3907 42.0747 29.9671 42.0938 29.5377 42.1092L29.1659 42.1207C27.7676 42.1547 26.369 42.1694 24.9703 42.1647L23.5405 42.1667H21.0316C19.6329 42.1714 18.2342 42.1567 16.836 42.1226L16.4642 42.1111C16.0092 42.0946 15.5543 42.0754 15.0995 42.0536C13.0602 41.9577 11.6687 41.6319 10.4458 41.1604C9.1668 40.68 8.00828 39.9257 7.0514 38.9505C6.07591 37.9927 5.32108 36.8337 4.83957 35.5542C4.36615 34.3332 4.04415 32.9417 3.94832 30.9024C3.92697 30.4476 3.90781 29.9927 3.89082 29.5377L3.88124 29.1659C3.8459 27.7677 3.82993 26.369 3.83332 24.9703V21.0297C3.82797 19.6316 3.84203 18.2336 3.87549 16.836L3.8889 16.4642C3.90424 16.0348 3.9234 15.6093 3.9464 15.0995C4.04224 13.0582 4.36424 11.6687 4.83765 10.4458C5.31945 9.16668 6.07575 8.00868 7.05332 7.05333C8.00953 6.07727 9.16733 5.32176 10.4458 4.83958C11.6687 4.36616 13.0582 4.04416 15.0995 3.94833L16.4642 3.89083L16.836 3.88124C18.2336 3.84593 19.6316 3.82995 21.0297 3.83333L24.9703 3.83524ZM23 13.4186C21.7302 13.4006 20.4695 13.6352 19.2912 14.1087C18.1129 14.5822 17.0404 15.2852 16.1361 16.1768C15.2318 17.0684 14.5138 18.1308 14.0236 19.3023C13.5335 20.4738 13.2811 21.731 13.2811 23.001C13.2811 24.2709 13.5335 25.5281 14.0236 26.6996C14.5138 27.8711 15.2318 28.9336 16.1361 29.8251C17.0404 30.7167 18.1129 31.4197 19.2912 31.8932C20.4695 32.3667 21.7302 32.6013 23 32.5833C25.5416 32.5833 27.9792 31.5737 29.7764 29.7764C31.5736 27.9792 32.5833 25.5417 32.5833 23C32.5833 20.4583 31.5736 18.0208 29.7764 16.2236C27.9792 14.4263 25.5416 13.4186 23 13.4186ZM23 17.2519C23.7638 17.2378 24.5227 17.3761 25.2325 17.6586C25.9423 17.9412 26.5886 18.3623 27.1338 18.8975C27.679 19.4326 28.1121 20.071 28.4078 20.7754C28.7034 21.4798 28.8558 22.236 28.8559 23C28.856 23.7639 28.7039 24.5202 28.4085 25.2247C28.113 25.9292 27.6802 26.5678 27.1352 27.1031C26.5902 27.6384 25.944 28.0597 25.2343 28.3425C24.5246 28.6253 23.7657 28.7638 23.0019 28.75C21.4769 28.75 20.0144 28.1442 18.936 27.0659C17.8577 25.9875 17.2519 24.525 17.2519 23C17.2519 21.475 17.8577 20.0125 18.936 18.9341C20.0144 17.8558 21.4769 17.25 23.0019 17.25L23 17.2519ZM33.0625 10.5436C32.4442 10.5683 31.8594 10.8314 31.4306 11.2776C31.0019 11.7238 30.7625 12.3187 30.7625 12.9375C30.7625 13.5563 31.0019 14.1511 31.4306 14.5974C31.8594 15.0436 32.4442 15.3067 33.0625 15.3314C33.6979 15.3314 34.3073 15.079 34.7566 14.6297C35.2059 14.1804 35.4583 13.571 35.4583 12.9356C35.4583 12.3002 35.2059 11.6908 34.7566 11.2415C34.3073 10.7922 33.6979 10.5397 33.0625 10.5397V10.5436Z" fill="black"/>
                    </svg>

                </a>
            </li>
            <li>
                <a class="nav-link" href="#">
                    <svg viewBox="0 0 42 42" fill="none" xmlns="https://www.whatsapp.com/?lang=es_LA" target="_blank">
                        <path d="M33.3375 8.59248C31.7331 6.97185 29.8221 5.6869 27.7159 4.81257C25.6097 3.93824 23.3505 3.49204 21.07 3.49998C11.515 3.49998 3.72752 11.2875 3.72752 20.8425C3.72752 23.905 4.53252 26.88 6.03752 29.505L3.58752 38.5L12.775 36.085C15.3125 37.4675 18.165 38.2025 21.07 38.2025C30.625 38.2025 38.4125 30.415 38.4125 20.86C38.4125 16.2225 36.61 11.865 33.3375 8.59248ZM21.07 35.2625C18.48 35.2625 15.9425 34.5625 13.72 33.25L13.195 32.935L7.73502 34.37L9.18752 29.05L8.83753 28.5075C7.39858 26.2097 6.63452 23.5537 6.63252 20.8425C6.63252 12.8975 13.1075 6.42248 21.0525 6.42248C24.9025 6.42248 28.525 7.92748 31.2375 10.6575C32.5806 11.9944 33.645 13.5846 34.369 15.336C35.0929 17.0873 35.4621 18.9649 35.455 20.86C35.49 28.805 29.015 35.2625 21.07 35.2625ZM28.98 24.4825C28.5425 24.2725 26.4075 23.2225 26.0225 23.065C25.62 22.925 25.34 22.855 25.0425 23.275C24.745 23.7125 23.9225 24.6925 23.6775 24.9725C23.4325 25.27 23.17 25.305 22.7325 25.0775C22.295 24.8675 20.895 24.395 19.25 22.925C17.955 21.77 17.0975 20.3525 16.835 19.915C16.59 19.4775 16.8 19.25 17.0275 19.0225C17.22 18.83 17.465 18.515 17.675 18.27C17.885 18.025 17.9725 17.8325 18.1125 17.5525C18.2525 17.255 18.1825 17.01 18.0775 16.8C17.9725 16.59 17.0975 14.455 16.7475 13.58C16.3975 12.74 16.03 12.845 15.7675 12.8275H14.9275C14.63 12.8275 14.175 12.9325 13.7725 13.37C13.3875 13.8075 12.2675 14.8575 12.2675 16.9925C12.2675 19.1275 13.825 21.1925 14.035 21.4725C14.245 21.77 17.0975 26.145 21.4375 28.0175C22.47 28.4725 23.275 28.735 23.905 28.9275C24.9375 29.26 25.8825 29.2075 26.635 29.1025C27.475 28.98 29.2075 28.0525 29.5575 27.0375C29.925 26.0225 29.925 25.165 29.8025 24.9725C29.68 24.78 29.4175 24.6925 28.98 24.4825Z" fill="black"/>
                    </svg>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Footer;