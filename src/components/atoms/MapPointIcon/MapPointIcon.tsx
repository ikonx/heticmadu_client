import React from 'react';
import styled from 'styled-components';

interface Props {
  point: any;
}

const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledIcon = styled.div`
  position: absolute;
  z-index: 1;
  transform: translateY(-3px);
`;

const MapPointIcon: React.FC<Props> = ({ point }) => {
  const renderEntryIcon = (point: any) => {
    switch (point.type) {
      case 'shop':
        return (
          <svg
            width="22"
            height="24"
            viewBox="0 0 22 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0504 6.10169H7.94873C7.72421 6.10169 7.54199 5.91947 7.54199 5.69495V3.45758C7.54187 1.55104 9.09292 0 10.9996 0C12.9062 0 14.4572 1.55104 14.4572 3.45758V5.69483C14.4572 5.91947 14.2749 6.10169 14.0504 6.10169ZM8.35547 5.28809H13.6436V3.45758C13.6436 1.99973 12.4574 0.813479 10.9995 0.813479C9.54149 0.813479 8.35547 1.99973 8.35547 3.45758V5.28809Z"
              fill="black"
            />
            <path
              d="M19.9491 7.72876H2.05078L3.27112 5.69495H18.7288L19.9491 7.72876Z"
              fill="#8C6B3B"
            />
            <path
              d="M19.9487 8.13561H2.05038C1.90368 8.13561 1.76866 8.05672 1.69644 7.92921C1.62422 7.80169 1.62601 7.64533 1.70156 7.51937L2.9219 5.48543C2.99531 5.3628 3.12771 5.28796 3.27072 5.28796H18.7284C18.8714 5.28796 19.0038 5.3628 19.0772 5.48543L20.2975 7.51937C20.373 7.6451 20.3749 7.80169 20.3026 7.92921C20.2304 8.0566 20.0953 8.13561 19.9487 8.13561ZM2.76876 7.32202H19.2303L18.4981 6.10168H3.5012L2.76876 7.32202Z"
              fill="black"
            />
            <path
              d="M10.9902 8.62556L16.5352 9.92224L17.9245 3.98126L12.3795 2.68458L10.9902 8.62556Z"
              fill="#83D816"
            />
            <path
              d="M16.5356 10.3309C16.5049 10.3309 16.4738 10.3275 16.4424 10.3202L10.8972 9.02323C10.7921 8.99856 10.7011 8.93349 10.6442 8.84161C10.5872 8.75008 10.5691 8.63949 10.5938 8.5345L11.9836 2.59334C12.0346 2.37453 12.2533 2.2382 12.4723 2.28992L18.0176 3.58689C18.1227 3.61156 18.2136 3.67663 18.2706 3.76851C18.3275 3.86003 18.3456 3.97063 18.321 4.07562L16.9312 10.0168C16.8874 10.2045 16.7201 10.3309 16.5356 10.3309ZM11.4785 8.32368L16.2317 9.43545L17.436 4.28667L12.6828 3.1749L11.4785 8.32368Z"
              fill="black"
            />
            <path
              d="M4.49896 9.73638L11.3027 8.93207L10.441 1.64222L3.63719 2.44654L4.49896 9.73638Z"
              fill="#2A8EE6"
            />
            <path
              d="M4.49832 10.1437C4.29489 10.1437 4.11935 9.99149 4.0948 9.78449L3.23329 2.495C3.20707 2.27191 3.36653 2.06967 3.58938 2.04322L10.393 1.23903C10.5006 1.2264 10.6077 1.25691 10.6926 1.32365C10.7775 1.39038 10.8322 1.48822 10.8448 1.59536L11.7063 8.88509C11.7189 8.99211 11.6887 9.10008 11.6217 9.18469C11.5549 9.26954 11.4571 9.32424 11.3502 9.33687L4.54658 10.1408C4.53026 10.1426 4.51417 10.1437 4.49832 10.1437ZM4.08884 2.80354L4.855 9.28515L10.8507 8.57679L10.0846 2.09494L4.08884 2.80354Z"
              fill="black"
            />
            <path
              d="M8.33493 12.7845L14.8887 11.2086L13.2302 4.31151L6.67645 5.88743L8.33493 12.7845Z"
              fill="#E2E2E2"
            />
            <path
              d="M8.33447 13.1912C8.15082 13.1912 7.98398 13.0661 7.93929 12.8796L6.28087 5.98286C6.22843 5.76442 6.36286 5.54478 6.58131 5.49235L13.1343 3.91651C13.2397 3.89149 13.3499 3.90901 13.4418 3.9649C13.5337 4.02127 13.5996 4.11196 13.6248 4.21671L15.2832 11.1136C15.3085 11.2186 15.291 11.3292 15.2346 11.4211C15.1782 11.5132 15.0878 11.5789 14.9828 11.6042L8.42981 13.1799C8.39799 13.1877 8.36581 13.1912 8.33447 13.1912ZM7.16681 6.18808L8.63502 12.2941L14.3971 10.9085L12.9288 4.80269L7.16681 6.18808Z"
              fill="black"
            />
            <path
              d="M20.7617 23.5931H1.23633L2.04981 7.72876H19.9481L20.7617 23.5931Z"
              fill="#FBAD4A"
            />
            <path
              d="M20.7622 24H1.23686C1.12543 24 1.01877 23.9542 0.941901 23.8734C0.865273 23.7926 0.824992 23.6837 0.830593 23.5724L1.64419 7.70803C1.65539 7.49185 1.83392 7.32214 2.05057 7.32214H19.9489C20.1655 7.32214 20.3441 7.49173 20.3553 7.70803L21.1689 23.5724C21.1746 23.6838 21.1343 23.7926 21.0576 23.8734C20.9802 23.9542 20.8737 24 20.7622 24ZM1.66493 23.1864H20.3341L19.5622 8.13562H2.43681L1.66493 23.1864Z"
              fill="black"
            />
            <path
              d="M14.0509 10.983C14.5002 10.983 14.8645 10.6188 14.8645 10.1694C14.8645 9.7201 14.5002 9.35583 14.0509 9.35583C13.6016 9.35583 13.2373 9.7201 13.2373 10.1694C13.2373 10.6188 13.6016 10.983 14.0509 10.983Z"
              fill="#8C6B3B"
            />
            <path
              d="M14.0504 11.3898C13.3774 11.3898 12.8301 10.8424 12.8301 10.1694C12.8301 9.49646 13.3774 8.9491 14.0504 8.9491C14.7234 8.9491 15.2708 9.49646 15.2708 10.1694C15.2708 10.8424 14.7234 11.3898 14.0504 11.3898ZM14.0504 9.76269C13.8261 9.76269 13.6437 9.94515 13.6437 10.1694C13.6437 10.3937 13.8261 10.5762 14.0504 10.5762C14.2747 10.5762 14.4572 10.3937 14.4572 10.1694C14.4572 9.94515 14.2747 9.76269 14.0504 9.76269Z"
              fill="black"
            />
            <path
              d="M7.94934 10.983C8.39868 10.983 8.76294 10.6188 8.76294 10.1694C8.76294 9.7201 8.39868 9.35583 7.94934 9.35583C7.5 9.35583 7.13574 9.7201 7.13574 10.1694C7.13574 10.6188 7.5 10.983 7.94934 10.983Z"
              fill="#8C6B3B"
            />
            <path
              d="M7.94885 11.3898C7.27588 11.3898 6.72852 10.8424 6.72852 10.1694C6.72852 9.49646 7.27588 8.9491 7.94885 8.9491C8.62183 8.9491 9.16919 9.49646 9.16919 10.1694C9.16919 10.8424 8.62183 11.3898 7.94885 11.3898ZM7.94885 9.76269C7.72457 9.76269 7.54211 9.94515 7.54211 10.1694C7.54211 10.3937 7.72457 10.5762 7.94885 10.5762C8.17314 10.5762 8.35559 10.3937 8.35559 10.1694C8.35559 9.94515 8.17314 9.76269 7.94885 9.76269Z"
              fill="black"
            />
            <path
              d="M10.9996 16.2711C9.09304 16.2711 7.54199 14.7201 7.54199 12.8135V10.5763C7.54199 10.3518 7.72421 10.1696 7.94873 10.1696C8.17325 10.1696 8.35547 10.3518 8.35547 10.5763V12.8135C8.35547 14.2714 9.5416 15.4576 10.9996 15.4576C12.4575 15.4576 13.6437 14.2715 13.6437 12.8135V10.7331C13.6233 10.685 13.6123 10.6318 13.6123 10.5763C13.6123 10.3518 13.7946 10.1696 14.0191 10.1696H14.0504C14.2749 10.1696 14.4572 10.3518 14.4572 10.5763V12.8135C14.4572 14.7201 12.9061 16.2711 10.9996 16.2711Z"
              fill="black"
            />
          </svg>
        );
      case 'resto':
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0071 6.59856C14.0247 5.87126 14.3076 5.18187 14.7928 4.65507L19.6781 0.545435C19.8703 0.383752 20.1543 0.395837 20.332 0.57345C20.5209 0.762416 20.5209 1.06894 20.332 1.2579L16.605 4.98484C16.3765 5.21336 16.3765 5.58397 16.605 5.81248L18.2588 7.4663C18.4873 7.69481 18.858 7.69481 19.0865 7.4663L22.8134 3.73936C23.0024 3.55039 23.3089 3.55039 23.4979 3.73936C23.6755 3.91697 23.6877 4.20097 23.5261 4.39323L19.4162 9.2785C18.8894 9.76373 18.2001 10.0466 17.4728 10.0642L16.0599 10.0686C15.4071 10.0708 14.7849 10.3455 14.3435 10.8265L3.10661 23.1634C2.55766 23.7574 1.53208 23.6831 0.960242 23.1111C0.388219 22.5392 0.313878 21.5138 0.907874 20.9647L13.2448 9.72784C13.7259 9.28637 14.0005 8.66418 14.0027 8.0114L14.0071 6.59856Z"
              fill="#E2E2E2"
            />
            <path
              d="M0.501393 21.8073C0.503957 21.783 0.50707 21.7586 0.510732 21.7343C0.518056 21.6858 0.527578 21.6378 0.539663 21.5905C0.545705 21.5669 0.552297 21.5435 0.559621 21.5202C0.624624 21.3111 0.738882 21.119 0.905875 20.9647L13.2428 9.72783C13.3166 9.66009 13.3851 9.58758 13.4488 9.51177C13.4889 9.46416 13.5277 9.41564 13.5638 9.3651C13.5871 9.33251 13.6096 9.29937 13.6312 9.26549C13.7176 9.13054 13.79 8.98735 13.8469 8.83794C13.9467 8.57665 13.9998 8.29686 14.0007 8.0114L14.0051 6.59837C14.0106 6.37113 14.0419 6.14774 14.0974 5.9315C14.1195 5.84507 14.1455 5.75993 14.1752 5.67606C14.3089 5.29905 14.5178 4.95133 14.7908 4.65506L19.6761 0.54543C19.7003 0.525105 19.7257 0.50771 19.7521 0.492878C19.8184 0.455891 19.8912 0.435749 19.9645 0.43227C19.9938 0.430988 20.0233 0.432087 20.0524 0.436115C20.1542 0.449848 20.2521 0.495808 20.33 0.573628C20.5189 0.762593 20.5189 1.06893 20.33 1.25808L16.603 4.98502C16.5316 5.05643 16.4823 5.14176 16.4556 5.23221C16.445 5.26829 16.4379 5.30527 16.4342 5.34263C16.4307 5.37998 16.4307 5.41752 16.4342 5.45487C16.4395 5.5109 16.453 5.5662 16.4745 5.61893C16.503 5.68943 16.5459 5.75535 16.603 5.81248L17.1155 6.32517L16.7599 6.62437C16.2747 7.15117 15.9918 7.84056 15.9742 8.56786C15.9742 8.56786 15.9742 8.58287 15.974 8.61034C15.9711 9.34624 15.5586 10.0093 14.9172 10.3702C14.9166 10.3705 14.9159 10.3709 14.9153 10.3713C14.9025 10.3784 14.8901 10.3861 14.8774 10.3936C14.8587 10.4046 14.8403 10.4158 14.8219 10.4271C14.8091 10.4352 14.7963 10.4434 14.7837 10.4518C14.7646 10.4643 14.7458 10.4769 14.7271 10.4899C14.7163 10.4976 14.7055 10.5049 14.6947 10.5126C14.6665 10.5331 14.6385 10.5542 14.611 10.576C14.6051 10.5806 14.5996 10.5853 14.5938 10.5901C14.5713 10.6084 14.5487 10.6271 14.5268 10.6465C14.5176 10.6544 14.5086 10.6626 14.4995 10.6706C14.4803 10.688 14.4612 10.7058 14.4424 10.7239C14.4343 10.7318 14.4261 10.7395 14.418 10.7476C14.392 10.7732 14.3664 10.7996 14.3415 10.8267L5.44874 20.5899L2.87518 22.934C2.70068 23.0953 2.58423 23.2978 2.52069 23.5179C2.42163 23.5465 2.3189 23.5642 2.2149 23.5716H2.21472C2.14624 23.5765 2.0772 23.5767 2.00817 23.5727C2.00616 23.5725 2.00415 23.5723 2.00231 23.5723C1.9342 23.5679 1.86608 23.5595 1.79852 23.5467C1.79614 23.5463 1.79376 23.5458 1.79138 23.5452C1.76061 23.5393 1.72985 23.5324 1.69927 23.5247C1.69579 23.5238 1.69232 23.523 1.68902 23.5221C1.65606 23.5137 1.62347 23.5042 1.59106 23.4938C1.59051 23.4936 1.58996 23.4934 1.58941 23.4932C1.55938 23.4833 1.52972 23.4725 1.50005 23.461C1.49401 23.4588 1.48797 23.4564 1.48193 23.4538C1.45245 23.4419 1.42333 23.4295 1.39459 23.4159C1.39385 23.4156 1.3933 23.4154 1.39275 23.4152C1.36346 23.4013 1.33471 23.3863 1.30614 23.3707C1.29974 23.367 1.29314 23.3634 1.28674 23.3597C1.26385 23.3467 1.24133 23.3332 1.21899 23.3191C1.21331 23.3154 1.20745 23.3119 1.20177 23.3083C1.17522 23.2909 1.14922 23.2727 1.12377 23.2539C1.11864 23.25 1.11388 23.2462 1.10894 23.2425C1.08825 23.2266 1.06792 23.2103 1.04797 23.1933C1.04137 23.1878 1.0346 23.1821 1.02819 23.1762C1.0042 23.1552 0.980765 23.1338 0.958243 23.1112C0.654287 22.8073 0.490956 22.3755 0.49352 21.9551C0.493886 21.9057 0.49645 21.8562 0.501393 21.8073V21.8073Z"
              fill="#D8D6D4"
            />
            <path
              d="M4.77197 9.16274C3.87951 9.08749 3.06853 8.61416 2.56407 7.87404L1.44932 6.23835C0.536357 4.89857 0.177652 3.25739 0.448649 1.65887C0.492961 1.3974 0.625346 1.16888 0.812847 1.00262C1.00035 0.836358 1.24315 0.732171 1.5081 0.719537C3.12749 0.642266 4.71411 1.19506 5.93469 2.26221L7.42481 3.56501C8.09919 4.15442 8.47181 5.01649 8.43958 5.91151L8.3592 7.32216C8.32221 7.97383 8.55897 8.61141 9.01271 9.08089L20.6524 21.0385C21.2123 21.6222 21.0767 22.6412 20.4713 23.1779C19.8661 23.7144 18.838 23.727 18.3257 23.1011L7.84998 10.1116C7.43818 9.60513 6.83356 9.29348 6.18207 9.2521L4.77197 9.16274Z"
              fill="#E2E2E2"
            />
            <path
              d="M0.44865 1.65889C0.492962 1.39741 0.625348 1.1689 0.812849 1.00264C0.883161 0.940197 0.961348 0.886547 1.04539 0.843334C1.12944 0.799938 1.21971 0.766979 1.31419 0.745739C1.377 0.73164 1.44182 0.722667 1.5081 0.719555C1.56633 0.716808 1.62456 0.71516 1.6826 0.713878C1.70018 0.713512 1.71776 0.713512 1.73534 0.713329C1.7769 0.71278 1.81828 0.71278 1.85967 0.713146C1.87871 0.713146 1.89775 0.713512 1.9168 0.713695C1.95983 0.714611 2.00286 0.715893 2.04589 0.717357C2.06108 0.71809 2.07646 0.718456 2.09166 0.719188C2.15044 0.721752 2.20903 0.725048 2.26763 0.729442C2.25316 2.00551 2.62835 3.26455 3.35583 4.33206L4.47058 5.96756C4.867 6.5491 5.45257 6.96604 6.11816 7.15445C6.62775 7.29874 7.12598 7.48057 7.59785 7.7208C8.03602 7.94382 8.46687 8.16666 8.47218 8.18296C8.47364 8.18772 8.47547 8.19248 8.47694 8.19706C8.48774 8.22892 8.49873 8.2606 8.51081 8.29191C8.51319 8.29832 8.51594 8.30454 8.5185 8.31095C8.53004 8.34043 8.54194 8.36991 8.55476 8.39903C8.55842 8.40708 8.56227 8.41514 8.56593 8.4232C8.57838 8.4503 8.59083 8.47739 8.6042 8.50413C8.60914 8.51402 8.61463 8.52354 8.61958 8.53343C8.63239 8.55814 8.6454 8.58268 8.65913 8.60703C8.66572 8.61875 8.67286 8.63011 8.67964 8.64164C8.69264 8.6638 8.70545 8.68577 8.71919 8.70756C8.72779 8.72111 8.73695 8.73429 8.74592 8.74784C8.75874 8.76707 8.77119 8.78648 8.78474 8.80534C8.79573 8.82109 8.80763 8.83647 8.81916 8.85185C8.83125 8.86814 8.84297 8.88462 8.85542 8.90037C8.87043 8.91941 8.88618 8.93791 8.90174 8.95658C8.91163 8.96849 8.92115 8.98057 8.93141 8.99229C8.95759 9.0225 8.98469 9.05198 9.01271 9.08091L20.6524 21.0385C21.2123 21.6222 21.0767 22.6412 20.4713 23.1779C19.8661 23.7144 18.838 23.727 18.3257 23.1012L7.84998 10.1116C7.43818 9.60515 6.83356 9.2935 6.18207 9.25212L4.77197 9.16276C3.87951 9.0875 3.06853 8.61418 2.56426 7.87406L1.44951 6.23837C0.536358 4.89859 0.177653 3.25741 0.44865 1.65889V1.65889Z"
              fill="#D8D6D4"
            />
            <path
              d="M6.16088 9.61127L4.75078 9.52191C4.7484 9.52173 4.74584 9.52155 4.74328 9.52136C3.73839 9.43658 2.83641 8.91015 2.26841 8.07666L1.15366 6.44115C0.183384 5.01732 -0.192533 3.29759 0.0954926 1.59891C0.152072 1.26529 0.322727 0.957855 0.57578 0.73355C0.829016 0.509062 1.15458 0.376493 1.49259 0.36038C3.21416 0.277982 4.87584 0.857513 6.17297 1.99149L7.66309 3.29429C8.42243 3.95805 8.83698 4.91661 8.80072 5.92461C8.80054 5.92699 8.80054 5.92955 8.80036 5.93212L8.71997 7.34258C8.68866 7.89245 8.89026 8.43499 9.27204 8.83014L20.9136 20.7895C21.2252 21.1145 21.3862 21.5604 21.3666 22.0451C21.345 22.5787 21.1001 23.1027 20.7116 23.4471C20.3606 23.7582 19.8781 23.9355 19.3958 23.9355C19.3442 23.9355 19.2925 23.9335 19.2411 23.9293C18.7575 23.8906 18.334 23.6775 18.0472 23.327L7.57226 10.3386C7.22491 9.9112 6.71038 9.64606 6.16088 9.61127ZM8.13147 9.88593L18.6055 22.8733C18.7655 23.0688 19.0116 23.1893 19.2984 23.2122C19.6395 23.2395 19.9892 23.126 20.2342 22.9088C20.4792 22.6915 20.6338 22.3578 20.6475 22.016C20.6592 21.7287 20.5693 21.47 20.3961 21.2894L8.7555 9.33093C8.23364 8.79095 7.95899 8.05139 8.00147 7.30175L8.08185 5.89495C8.10913 5.10594 7.78412 4.35576 7.18957 3.83592L5.69946 2.53312C4.54296 1.52219 3.0609 1.00601 1.52683 1.07889C1.35215 1.08731 1.18406 1.15579 1.05314 1.27188C0.922217 1.38779 0.834143 1.54672 0.804846 1.71903C0.548131 3.2335 0.883215 4.76646 1.74821 6.03575L2.86296 7.67144C3.30772 8.32403 4.0136 8.73657 4.80022 8.80414L6.20648 8.89313C6.95575 8.94073 7.65704 9.30218 8.13147 9.88593Z"
              fill="black"
            />
            <path
              d="M0.663751 20.6987L8.46938 13.5892C8.61623 13.4554 8.84365 13.466 8.97768 13.6128C9.11135 13.7597 9.10073 13.9873 8.95388 14.1211L1.15026 21.2289C0.964594 21.4005 0.859308 21.6534 0.853632 21.9409C0.846857 22.2829 0.981074 22.6251 1.2127 22.8568C1.44415 23.0882 1.78583 23.2228 2.1286 23.2158C2.41608 23.2102 2.66895 23.1049 2.83869 22.9212L9.79415 15.285C9.92801 15.1379 10.1556 15.1275 10.3025 15.2611C10.4493 15.395 10.4599 15.6226 10.3261 15.7695L3.36896 23.4075C3.06317 23.7382 2.62775 23.9257 2.1427 23.9353C2.13006 23.9354 2.11761 23.9356 2.10498 23.9356C1.58368 23.9356 1.06237 23.7241 0.704034 23.3656C0.336723 22.9983 0.123771 22.4605 0.134391 21.9268C0.143913 21.4417 0.33123 21.0063 0.663751 20.6987V20.6987Z"
              fill="black"
            />
            <path
              d="M19.6589 9.54317C19.0635 10.0918 18.2899 10.4045 17.4805 10.4239C17.478 10.4241 17.4754 10.4241 17.473 10.4241L16.0602 10.4285C15.5094 10.4301 14.98 10.664 14.6085 11.0688L13.9861 11.752C13.9151 11.83 13.8179 11.8695 13.7201 11.8695C13.6337 11.8695 13.5469 11.8386 13.478 11.7758C13.331 11.6419 13.3204 11.4143 13.4542 11.2675L14.0775 10.5834C14.5851 10.03 15.3069 9.71144 16.0578 9.70888L17.4668 9.70449C18.0928 9.68856 18.6914 9.44887 19.1552 9.02901L23.2497 4.16168C23.2914 4.11188 23.2883 4.03973 23.2423 3.99377C23.2108 3.96209 23.1739 3.95752 23.1546 3.95752C23.1354 3.95752 23.0984 3.96209 23.0667 3.99377L19.3398 7.7209C18.9714 8.08931 18.3719 8.08931 18.0035 7.72071L17.5655 7.28291V7.28272L16.7878 6.50507C16.7878 6.50507 16.7877 6.50507 16.7877 6.50489L16.7875 6.50471L16.3497 6.0669C15.9813 5.69849 15.9813 5.099 16.3497 4.73059L20.0766 1.00365C20.125 0.955309 20.125 0.87639 20.0766 0.82805C20.0307 0.782091 19.9585 0.778978 19.9087 0.820726L15.0414 4.91535C14.6213 5.37897 14.3816 5.97773 14.3657 6.60358L14.3615 8.01277C14.3589 8.7635 14.0402 9.48531 13.4861 9.99398L12.8192 10.6013C12.6722 10.7352 12.4448 10.7246 12.3109 10.5777C12.1772 10.4307 12.1879 10.2033 12.3347 10.0694L13.0005 9.46297C13.4064 9.09053 13.6401 8.56099 13.6419 8.01039L13.6463 6.59754C13.6463 6.59498 13.6463 6.59241 13.6465 6.58985C13.6659 5.78052 13.9786 5.0069 14.5272 4.41144C14.5375 4.40027 14.5485 4.38965 14.5602 4.37976L19.4456 0.270126C19.7833 -0.0140548 20.2733 0.0071855 20.5853 0.319198C20.9143 0.64824 20.9143 1.18346 20.5853 1.51232L16.8583 5.23944C16.7704 5.32733 16.7704 5.47034 16.8583 5.55823L17.042 5.7417L21.1958 1.58812C21.3362 1.4475 21.564 1.4475 21.7044 1.58812C21.8449 1.72857 21.8449 1.95635 21.7044 2.09679L17.5507 6.25055L17.8198 6.51954L21.9736 2.36596C22.114 2.22552 22.3418 2.22552 22.4823 2.36596C22.6229 2.5064 22.6229 2.73418 22.4823 2.87463L18.3287 7.02839L18.5122 7.21204C18.6 7.29994 18.7431 7.29994 18.8309 7.21204L22.5581 3.4851C22.7174 3.3258 22.9292 3.23791 23.1546 3.23791C23.38 3.23791 23.5919 3.3258 23.7512 3.4851C24.0632 3.79712 24.0843 4.28711 23.8003 4.62494L19.6904 9.51021C19.6807 9.52193 19.6701 9.53292 19.6589 9.54317Z"
              fill="black"
            />
          </svg>
        );
      case 'business':
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.25 23.25V6H22.5V23.25" fill="#3D98F7" />
            <path d="M16.5 21H20.25V23.25H16.5V21Z" fill="#F5B953" />
            <path d="M9.75 15.75H14.25V23.25H9.75V15.75Z" fill="#2B74CA" />
            <path d="M1.5 23.25V11.625H9.75V23.25" fill="#3D98F7" />
            <path d="M15.75 9H17.25V10.5H15.75V9Z" fill="white" />
            <path d="M19.5 9H21V10.5H19.5V9Z" fill="white" />
            <path d="M15.75 12H17.25V13.5H15.75V12Z" fill="white" />
            <path d="M19.5 12H21V13.5H19.5V12Z" fill="white" />
            <path d="M15.75 15H17.25V16.5H15.75V15Z" fill="white" />
            <path d="M19.5 15H21V16.5H19.5V15Z" fill="white" />
            <path d="M15.75 18H17.25V19.5H15.75V18Z" fill="white" />
            <path d="M19.5 18H21V19.5H19.5V18Z" fill="white" />
            <path d="M3 13.125H4.5V14.625H3V13.125Z" fill="white" />
            <path d="M6.75 13.125H8.25V14.625H6.75V13.125Z" fill="white" />
            <path d="M3 16.125H4.5V17.625H3V16.125Z" fill="white" />
            <path d="M6.75 16.125H8.25V17.625H6.75V16.125Z" fill="white" />
            <path d="M3 19.125H4.5V20.625H3V19.125Z" fill="white" />
            <path d="M6.75 19.125H8.25V20.625H6.75V19.125Z" fill="white" />
            <path d="M15 6V4.5H21.75V6" fill="#F5B953" />
            <path d="M2.25 11.625V10.125H9V11.625" fill="#F5B953" />
            <path
              d="M16.5 3C16.9142 3 17.25 2.49632 17.25 1.875C17.25 1.25368 16.9142 0.75 16.5 0.75C16.0858 0.75 15.75 1.25368 15.75 1.875C15.75 2.49632 16.0858 3 16.5 3Z"
              fill="#669E4F"
            />
            <path
              d="M20.25 3C20.6642 3 21 2.49632 21 1.875C21 1.25368 20.6642 0.75 20.25 0.75C19.8358 0.75 19.5 1.25368 19.5 1.875C19.5 2.49632 19.8358 3 20.25 3Z"
              fill="#669E4F"
            />
            <path d="M0.375 22.875H23.625V23.625H0.375V22.875Z" fill="black" />
            <path
              d="M22.875 23.25H22.125V6.375H14.625V23.25H13.875V6C13.875 5.793 14.0426 5.625 14.25 5.625H22.5C22.7074 5.625 22.875 5.793 22.875 6V23.25Z"
              fill="black"
            />
            <path
              d="M22.125 6H21.375V4.875H15.375V6H14.625V4.5C14.625 4.293 14.7926 4.125 15 4.125H21.75C21.9574 4.125 22.125 4.293 22.125 4.5V6Z"
              fill="black"
            />
            <path
              d="M10.125 23.25H9.375V12H1.875V23.25H1.125V11.625C1.125 11.418 1.29263 11.25 1.5 11.25H9.75C9.95737 11.25 10.125 11.418 10.125 11.625V23.25Z"
              fill="black"
            />
            <path
              d="M9.375 11.625H8.625V10.5H2.625V11.625H1.875V10.125C1.875 9.918 2.04263 9.75 2.25 9.75H9C9.20737 9.75 9.375 9.918 9.375 10.125V11.625Z"
              fill="black"
            />
            <path d="M9.75 15.375H14.25V16.125H9.75V15.375Z" fill="black" />
            <path
              d="M10.875 16.875H11.625V17.625H10.875V16.875Z"
              fill="black"
            />
            <path
              d="M12.375 16.875H13.125V17.625H12.375V16.875Z"
              fill="black"
            />
            <path
              d="M10.875 18.375H11.625V19.125H10.875V18.375Z"
              fill="black"
            />
            <path
              d="M12.375 18.375H13.125V19.125H12.375V18.375Z"
              fill="black"
            />
            <path
              d="M10.875 19.875H11.625V20.625H10.875V19.875Z"
              fill="black"
            />
            <path
              d="M12.375 19.875H13.125V20.625H12.375V19.875Z"
              fill="black"
            />
            <path
              d="M10.875 21.375H11.625V22.125H10.875V21.375Z"
              fill="black"
            />
            <path
              d="M12.375 21.375H13.125V22.125H12.375V21.375Z"
              fill="black"
            />
            <path
              d="M17.25 10.875H15.75C15.5426 10.875 15.375 10.707 15.375 10.5V9C15.375 8.793 15.5426 8.625 15.75 8.625H17.25C17.4574 8.625 17.625 8.793 17.625 9V10.5C17.625 10.707 17.4574 10.875 17.25 10.875ZM16.125 10.125H16.875V9.375H16.125V10.125Z"
              fill="black"
            />
            <path
              d="M21 10.875H19.5C19.2926 10.875 19.125 10.707 19.125 10.5V9C19.125 8.793 19.2926 8.625 19.5 8.625H21C21.2074 8.625 21.375 8.793 21.375 9V10.5C21.375 10.707 21.2074 10.875 21 10.875ZM19.875 10.125H20.625V9.375H19.875V10.125Z"
              fill="black"
            />
            <path
              d="M17.25 13.875H15.75C15.5426 13.875 15.375 13.707 15.375 13.5V12C15.375 11.793 15.5426 11.625 15.75 11.625H17.25C17.4574 11.625 17.625 11.793 17.625 12V13.5C17.625 13.707 17.4574 13.875 17.25 13.875ZM16.125 13.125H16.875V12.375H16.125V13.125Z"
              fill="black"
            />
            <path
              d="M21 13.875H19.5C19.2926 13.875 19.125 13.707 19.125 13.5V12C19.125 11.793 19.2926 11.625 19.5 11.625H21C21.2074 11.625 21.375 11.793 21.375 12V13.5C21.375 13.707 21.2074 13.875 21 13.875ZM19.875 13.125H20.625V12.375H19.875V13.125Z"
              fill="black"
            />
            <path
              d="M17.25 16.875H15.75C15.5426 16.875 15.375 16.707 15.375 16.5V15C15.375 14.793 15.5426 14.625 15.75 14.625H17.25C17.4574 14.625 17.625 14.793 17.625 15V16.5C17.625 16.707 17.4574 16.875 17.25 16.875ZM16.125 16.125H16.875V15.375H16.125V16.125Z"
              fill="black"
            />
            <path
              d="M21 16.875H19.5C19.2926 16.875 19.125 16.707 19.125 16.5V15C19.125 14.793 19.2926 14.625 19.5 14.625H21C21.2074 14.625 21.375 14.793 21.375 15V16.5C21.375 16.707 21.2074 16.875 21 16.875ZM19.875 16.125H20.625V15.375H19.875V16.125Z"
              fill="black"
            />
            <path
              d="M17.25 19.875H15.75C15.5426 19.875 15.375 19.707 15.375 19.5V18C15.375 17.793 15.5426 17.625 15.75 17.625H17.25C17.4574 17.625 17.625 17.793 17.625 18V19.5C17.625 19.707 17.4574 19.875 17.25 19.875ZM16.125 19.125H16.875V18.375H16.125V19.125Z"
              fill="black"
            />
            <path
              d="M21 19.875H19.5C19.2926 19.875 19.125 19.707 19.125 19.5V18C19.125 17.793 19.2926 17.625 19.5 17.625H21C21.2074 17.625 21.375 17.793 21.375 18V19.5C21.375 19.707 21.2074 19.875 21 19.875ZM19.875 19.125H20.625V18.375H19.875V19.125Z"
              fill="black"
            />
            <path
              d="M4.5 15H3C2.79263 15 2.625 14.832 2.625 14.625V13.125C2.625 12.918 2.79263 12.75 3 12.75H4.5C4.70737 12.75 4.875 12.918 4.875 13.125V14.625C4.875 14.832 4.70737 15 4.5 15ZM3.375 14.25H4.125V13.5H3.375V14.25Z"
              fill="black"
            />
            <path
              d="M8.25 15H6.75C6.54263 15 6.375 14.832 6.375 14.625V13.125C6.375 12.918 6.54263 12.75 6.75 12.75H8.25C8.45737 12.75 8.625 12.918 8.625 13.125V14.625C8.625 14.832 8.45737 15 8.25 15ZM7.125 14.25H7.875V13.5H7.125V14.25Z"
              fill="black"
            />
            <path
              d="M4.5 18H3C2.79263 18 2.625 17.832 2.625 17.625V16.125C2.625 15.918 2.79263 15.75 3 15.75H4.5C4.70737 15.75 4.875 15.918 4.875 16.125V17.625C4.875 17.832 4.70737 18 4.5 18ZM3.375 17.25H4.125V16.5H3.375V17.25Z"
              fill="black"
            />
            <path
              d="M8.25 18H6.75C6.54263 18 6.375 17.832 6.375 17.625V16.125C6.375 15.918 6.54263 15.75 6.75 15.75H8.25C8.45737 15.75 8.625 15.918 8.625 16.125V17.625C8.625 17.832 8.45737 18 8.25 18ZM7.125 17.25H7.875V16.5H7.125V17.25Z"
              fill="black"
            />
            <path
              d="M4.5 21H3C2.79263 21 2.625 20.832 2.625 20.625V19.125C2.625 18.918 2.79263 18.75 3 18.75H4.5C4.70737 18.75 4.875 18.918 4.875 19.125V20.625C4.875 20.832 4.70737 21 4.5 21ZM3.375 20.25H4.125V19.5H3.375V20.25Z"
              fill="black"
            />
            <path
              d="M8.25 21H6.75C6.54263 21 6.375 20.832 6.375 20.625V19.125C6.375 18.918 6.54263 18.75 6.75 18.75H8.25C8.45737 18.75 8.625 18.918 8.625 19.125V20.625C8.625 20.832 8.45737 21 8.25 21ZM7.125 20.25H7.875V19.5H7.125V20.25Z"
              fill="black"
            />
            <path
              d="M20.625 23.25H19.875V21.375H16.875V23.25H16.125V21C16.125 20.793 16.2926 20.625 16.5 20.625H20.25C20.4574 20.625 20.625 20.793 20.625 21V23.25Z"
              fill="black"
            />
            <path
              d="M16.5 3.375C15.8689 3.375 15.375 2.71613 15.375 1.875C15.375 1.03387 15.8689 0.375 16.5 0.375C17.1311 0.375 17.625 1.03387 17.625 1.875C17.625 2.71613 17.1311 3.375 16.5 3.375ZM16.5 1.125C16.347 1.125 16.125 1.41713 16.125 1.875C16.125 2.33287 16.347 2.625 16.5 2.625C16.653 2.625 16.875 2.33287 16.875 1.875C16.875 1.41713 16.653 1.125 16.5 1.125Z"
              fill="black"
            />
            <path d="M16.125 3H16.875V4.5H16.125V3Z" fill="black" />
            <path
              d="M20.25 3.375C19.6189 3.375 19.125 2.71613 19.125 1.875C19.125 1.03387 19.6189 0.375 20.25 0.375C20.8811 0.375 21.375 1.03387 21.375 1.875C21.375 2.71613 20.8811 3.375 20.25 3.375ZM20.25 1.125C20.097 1.125 19.875 1.41713 19.875 1.875C19.875 2.33287 20.097 2.625 20.25 2.625C20.403 2.625 20.625 2.33287 20.625 1.875C20.625 1.41713 20.403 1.125 20.25 1.125Z"
              fill="black"
            />
            <path d="M19.875 3H20.625V4.5H19.875V3Z" fill="black" />
            <path d="M15.375 7.125H21.375V7.875H15.375V7.125Z" fill="black" />
          </svg>
        );
      default:
        return <p>r</p>;
    }
  };

  const renderEntryIconColor = (point: any) => {
    switch (point.type) {
      case 'shop':
        return '#EB5757';
      case 'resto':
        return '#FFC22C';
      case 'business':
        return '#B6D5FF';
      default:
        return '#eee';
    }
  };

  return (
    <StyledIconContainer>
      <StyledIcon>{renderEntryIcon(point)}</StyledIcon>
      <svg
        width="48"
        height="58"
        viewBox="0 0 48 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 0C10.7665 0 0 10.6719 0 23.7891C0 34.3649 7.0308 43.6372 17.1933 46.6068L22.4665 57.0606C22.7567 57.6363 23.3504 58 24 58C24.6491 58 25.2429 57.6363 25.533 57.0606L30.8063 46.6073C40.9692 43.6376 48 34.3654 48 23.7891C48 10.6719 37.2335 0 24 0Z"
          fill={renderEntryIconColor(point)}
        />
        <path
          d="M24 0C10.7665 0 0 10.6719 0 23.7891C0 34.3649 7.0308 43.6372 17.1933 46.6068L22.4665 57.0606C22.7567 57.6363 23.3504 58 24 58C24.6491 58 25.2429 57.6363 25.533 57.0606L30.8063 46.6073C40.9692 43.6376 48 34.3654 48 23.7891C48 10.6719 37.2335 0 24 0ZM29.1835 43.527C28.704 43.65 28.3022 43.9726 28.0804 44.4116L24 52.5014L19.9192 44.4116C19.6978 43.9726 19.2955 43.65 18.8165 43.5265C9.75625 41.1963 3.42857 33.0799 3.42857 23.7891C3.42857 12.5455 12.6567 3.39844 24 3.39844C35.3433 3.39844 44.5714 12.5455 44.5714 23.7891C44.5714 33.0799 38.2438 41.1963 29.1835 43.527Z"
          fill="white"
        />
      </svg>
    </StyledIconContainer>
  );
};

export default MapPointIcon;
