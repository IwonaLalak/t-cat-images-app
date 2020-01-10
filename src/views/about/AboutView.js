import React from 'react';
import __application from "../../services/__application";

const AboutView = () => {

    return (
        <div id={'AboutView'}>
            <h4>
                About
            </h4>
            <p>
                Hey there! Cat images is a web application where you can scroll images of cats, filter them and save your favourites (if you are logged).
                Keyboard support has been added to the application to make it more convenient to use - when you choose view `tile`, you can use arrow-left, arrow-right, S for share and F for add or remove image from favourites.
                The app uses data getting via HTTP requests from The Cat API. Some actions can't be implemented because of restrictions of API - please see Notes below.
            </p>
            <p>
                This app has been build with ReactJS in old way (by using combination of classes and stateless components, without hooks).
                I plan to create a similar one, but next time using hooks to check some aspects of application development in React.
                Code is available in github repo and it's possible that i will continue developing it.
            </p>
            <p>
                If you see any bug or something that could be done better, please let me know! Thank you!
            </p>
            <h4>
                Notes
            </h4>
            <p>
                Here are some notes about functionality of this app:
                <ul>
                    <li>cannot log with using password</li>
                    <li>cannot filter favourites</li>
                    <li>API doesn't return images, only url to them - that's why they can be loading slowly</li>
                    <li>if you search images in radom order (default) in tiles view, you will see different image in case of using `see previous` functionality</li>
                    <li>API doesn't provide total number of images so there cant be done nicely support for paging</li>
                    <li>request `/search` doesn't return info whether a given image is among  the user's favourites</li>
                    <li>there are too few categories :(</li>
                </ul>
            </p>
            <h4>
                App info
            </h4>
            <p>
                <table>
                    {

                        Object.keys(__application).map((key)=>(
                            <tr>
                                <td>{key}</td>
                                <td>
                                    {
                                        __application[key].indexOf('https://')>-1?
                                            <a href={__application[key]} target={"_blank"}>{__application[key].substr(8,__application[key].length)}</a>
                                            :
                                        __application[key]
                                    }
                                </td>
                            </tr>
                        ))

                    }

                </table>
            </p>
        </div>
    );
};

export default AboutView;