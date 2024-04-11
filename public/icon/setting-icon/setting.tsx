import React from "react";
import * as S from "../icon.style";
const Setting = ({isFocus} : {isFocus : boolean}) => {
  return (
    <S.Icon $isFocus={isFocus}
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M99.6819 15C102.168 15.0035 104.653 15.1134 107.13 15.3294C115.025 16.0094 120.826 21.8532 122.632 28.7065L125.692 40.4685C125.884 41.1698 126.532 42.1473 127.945 42.8486C130.399 44.0598 132.769 45.4305 135.042 46.9499C136.349 47.8211 137.518 47.9061 138.219 47.7043L149.939 44.4848C156.782 42.6148 164.729 44.708 169.277 51.1787C172.146 55.2694 174.653 59.5938 176.757 64.1201C180.104 71.2921 177.936 79.2291 172.889 84.2123L164.24 92.7762C163.72 93.2862 163.199 94.3381 163.305 95.9C163.475 98.6307 163.475 101.372 163.305 104.103C163.199 105.665 163.709 106.716 164.24 107.226L172.889 115.79C177.936 120.774 180.104 128.711 176.757 135.883C174.649 140.405 172.146 144.732 169.277 148.813C164.729 155.295 156.782 157.388 149.939 155.507L138.23 152.298C137.518 152.097 136.349 152.182 135.042 153.053C132.768 154.573 130.398 155.943 127.945 157.154C126.532 157.855 125.884 158.833 125.703 159.534L122.622 171.286C120.837 178.149 115.025 183.993 107.13 184.673C102.174 185.109 97.1896 185.109 92.2337 184.673C84.3392 183.993 78.5378 178.149 76.7422 171.286L73.6715 159.534C73.4803 158.833 72.8321 157.855 71.419 157.154C68.9638 155.948 66.5926 154.578 64.3214 153.053C63.0145 152.182 61.8457 152.097 61.1444 152.298L49.4249 155.518C42.5823 157.388 34.6347 155.295 30.0871 148.824C27.224 144.735 24.7212 140.405 22.607 135.883C19.26 128.711 21.4276 120.774 26.4639 115.79L35.1234 107.226C35.6547 106.716 36.1647 105.665 36.0584 104.103C35.8884 101.371 35.8884 98.6316 36.0584 95.9C36.1647 94.3381 35.6547 93.2862 35.1234 92.7762L26.4639 84.2123C21.4276 79.2291 19.26 71.2921 22.607 64.1201C24.7121 59.5966 27.2153 55.2693 30.0871 51.1893C34.6347 44.708 42.5823 42.6148 49.4249 44.4955L61.1338 47.7043C61.8457 47.9061 63.0145 47.8211 64.3214 46.9499C66.5952 45.4305 68.9646 44.0598 71.419 42.8486C72.8321 42.1473 73.4803 41.1698 73.6609 40.4685L76.7422 28.7171C78.5272 21.8532 84.3392 16.0094 92.2337 15.3188C94.6881 15.1063 97.1744 15 99.6819 15ZM93.615 31.2034C93.2325 31.2353 92.4674 31.5859 92.1593 32.7547L89.0886 44.4955C87.5267 50.4562 83.2554 54.77 78.4847 57.1288C76.6466 58.0425 74.8722 59.0732 73.1721 60.2101C68.7414 63.1639 62.8657 64.7045 56.9263 63.0789L45.2067 59.8595C44.0485 59.5407 43.3473 60.0295 43.1348 60.3376C40.7972 63.6526 38.7572 67.1802 37.0466 70.8565C36.8978 71.1859 36.8234 72.0253 37.6735 72.8753L46.333 81.4392C50.6999 85.753 52.3043 91.6075 51.9643 96.9094C51.8368 98.9687 51.8368 101.034 51.9643 103.093C52.3043 108.395 50.6999 114.25 46.333 118.563L37.6735 127.127C36.8128 127.977 36.8978 128.817 37.0466 129.146C38.7678 132.822 40.7972 136.339 43.1348 139.654C43.3473 139.973 44.0379 140.462 45.2067 140.143L56.9156 136.924C62.8657 135.298 68.7414 136.839 73.1721 139.793C74.8828 140.929 76.6572 141.96 78.4953 142.874C83.2448 145.233 87.5267 149.557 89.0886 155.507L92.1593 167.248C92.4674 168.406 93.2325 168.767 93.615 168.799C97.652 169.15 101.712 169.15 105.749 168.799C106.131 168.767 106.896 168.417 107.205 167.248L110.275 155.507C111.837 149.546 116.108 145.233 120.879 142.874C122.717 141.96 124.492 140.929 126.192 139.793C130.622 136.839 136.498 135.298 142.438 136.924L154.157 140.143C155.315 140.451 156.017 139.973 156.229 139.665C158.567 136.339 160.596 132.822 162.317 129.146C162.466 128.817 162.54 127.977 161.69 127.127L153.031 118.563C148.664 114.25 147.06 108.395 147.4 103.093C147.527 101.034 147.527 98.9687 147.4 96.9094C147.06 91.6075 148.664 85.753 153.031 81.4392L161.69 72.8753C162.551 72.0253 162.466 71.1859 162.317 70.8565C160.602 67.1808 158.565 63.6643 156.229 60.3482C156.017 60.0295 155.326 59.5407 154.157 59.8595L142.448 63.0789C136.498 64.7045 130.622 63.1639 126.192 60.2101C124.486 59.0683 122.708 58.039 120.869 57.1288C116.119 54.77 111.837 50.4456 110.275 44.4955L107.205 32.7547C106.896 31.5859 106.131 31.2353 105.749 31.2034C101.712 30.8528 97.652 30.8528 93.615 31.2034ZM131.557 100.001C131.557 108.455 128.199 116.563 122.221 122.541C116.243 128.519 108.136 131.877 99.6819 131.877C91.228 131.877 83.1204 128.519 77.1425 122.541C71.1647 116.563 67.8064 108.455 67.8064 100.001C67.8064 91.5474 71.1647 83.4398 77.1425 77.462C83.1204 71.4841 91.228 68.1258 99.6819 68.1258C108.136 68.1258 116.243 71.4841 122.221 77.462C128.199 83.4398 131.557 91.5474 131.557 100.001ZM115.62 100.001C115.618 95.773 113.937 91.7184 110.946 88.7294C107.955 85.7405 103.9 84.0622 99.6713 84.0636C95.4429 84.065 91.3883 85.7461 88.3994 88.737C85.4105 91.7279 83.7321 95.7836 83.7336 100.012C83.735 104.24 85.416 108.295 88.4069 111.284C89.8879 112.764 91.6458 113.938 93.5804 114.738C95.5149 115.539 97.5883 115.95 99.6819 115.95C101.776 115.949 103.849 115.536 105.783 114.734C107.717 113.932 109.474 112.757 110.954 111.276C112.434 109.795 113.608 108.037 114.408 106.103C115.209 104.168 115.62 102.095 115.62 100.001Z"
      />
    </S.Icon>
  );
};

export default Setting;
