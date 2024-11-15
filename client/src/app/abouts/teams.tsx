import { Trans, useTranslation } from 'react-i18next'
import BannerModel from '../../components/bannerModel'
import { useDisclosure } from '@mantine/hooks';
import ModalTeams from '../../components/modal';
import { useState } from 'react';

interface OpenProps {
    name: string;
    experienceKey: string;
}
export default function Teams() {

    const { t } = useTranslation()
    const [opened, { open, close }] = useDisclosure(false);
    const [selectedProfile, setSelectedProfile] = useState<OpenProps | null>(null);

    const handleOpenModal = (profile: OpenProps) => {
        setSelectedProfile(profile); // Set the profile data
        open(); // Open the modal
    };

    return (
        <div className='teams-page'>
            <ModalTeams
                opened={opened}
                close={close}
                poste={selectedProfile as OpenProps} 
            />
            <BannerModel 
                title={t("home.about-us.title") + ' > '+ t("about-us.our-teams.title")}
                subtitle={t('about-us.our-teams.subtitle')}
            />
            
            <div className="our-teams">
                <p className='description'><Trans i18nKey="about-us.our-teams.content" /></p>
                <div className="card-teams">
                <div className="card">
                        <div className="card-image">
                            <img src="/assets/florence.jpg" alt="user of teams" />
                        </div>
                        <div className="info">
                            <div className="head">
                                <p>Florence Maxwell-Aylwin</p>
                                <span>{t("about-us.our-teams.teams2.fonction")}</span>
                            </div>
                            <p className="role">{t("about-us.our-teams.teams2.poste-court")}...</p>
                            <div className="action">
                                <div className='rond' />
                                <button 
                                    className='more'
                                    onClick={() => handleOpenModal({name: "Florence Maxwell-Aylwin", experienceKey: "about-us.our-teams.teams2.poste-long"})}
                                >
                                    {t("about-us.our-teams.button")}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img 
                                src="/assets/teams/teams.jpg"
                                alt="user of teams" 
                            />
                        </div>
                        <div className="info">
                            <div className="head">
                                <p>John Doe</p>
                                <span>{t("about-us.our-teams.teams1.fonction")}</span>
                            </div>
                            <p className="role">He's an accomplished business developer. Her skills at creating relationships with clients...</p>
                            <div className="action">
                                <div className='rond' />
                                <button 
                                    className='more'
                                    onClick={() => handleOpenModal({name: "John Doe", experienceKey: "about-us.our-teams.teams1.poste-long"})}
                                >
                                    {t("about-us.our-teams.button")}
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    {/* <div className="card">
                        <div className="card-image">
                            <img src="/assets/user.webp" alt="user of teams" />
                        </div>
                        <div className="info">
                            <div className="head">
                                <p>John Doe</p>
                                <span>Intermediaire</span>
                            </div>
                            <p className="role">She is an accomplished business developer. Her skills at creating relationships with clients...</p>
                            <div className="action">
                                <div className='rond' />
                                <Link to="#" className='more'>Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-image">
                            <img src="/assets/florence.jpg" alt="user of teams" />
                        </div>
                        <div className="info">
                            <div className="head">
                                <p>Florence Maxwell-Aylwin</p>
                                <span>Deputy Director</span>
                            </div>
                            <p className="role">She is an accomplished business developer. Her skills at creating relationships with clients...</p>
                            <div className="action">
                                <div className='rond' />
                                <Link to="#" className='more'>Read More</Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
