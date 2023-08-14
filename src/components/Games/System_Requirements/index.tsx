import React from 'react';
import './style.css';


export const SystemRequirements: React.FC = (): JSX.Element => {
    return (
        <div className='GamesBox System_Requiremnt' id='System_Requiremnt'>
            <div className='System_Req'>
                <h4>CAN MY COMPUTER RUN THIS GAME?</h4>
                <h2>SYSTEM REQUIREMENTS</h2>
            </div>
            <div className='Gamin_informatin'>
                <div className='system-box'>
                    <h3>OS:</h3>
                    <p>
                        Windows 7 64-bit only<br />
                        (No OSX support at this time)
                    </p>
                </div>
                <div className='system-box'>
                    <h3>PROCESSOR:</h3>
                    <p>
                        Intel Core 2 Duo @ 2.4 GHZ<br />
                        or AMD Athlon X2 @ 2.8 GHZ
                    </p>
                </div>
                <div className='system-box'>
                    <h3>MEMORY:</h3>
                    <p>
                        8GB RAM
                    </p>
                </div>
                <div className='system-box'>
                    <h3>STORAGE:</h3>
                    <p>
                        8GB available space
                    </p>
                </div>
                <div className='GRAPHICS'>
                    <h3>GRAPHICS: </h3>
                    <p>
                        NVIDIA GeForce GTX 660 2GB or<br />
                        AMD Radeon HD 7850 2GB DirectX11 Shader Model 5
                    </p>
                </div>
            </div>
        </div>
    )
}