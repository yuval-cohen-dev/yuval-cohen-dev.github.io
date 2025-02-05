import NoScript from "@/components/NoScript";

export default function NOSCRIPT(){
    return (
        <NoScript>
          <meta
            http-equiv="refresh"
            content="0;url=/no-javascript"
          />
          <p>
            Your browser does not support JavaScript or it is disabled. Some
            features of this website may not work properly without JavaScript
            enabled.
          </p>                

        </NoScript>
    )
}
