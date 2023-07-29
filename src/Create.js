import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { useNavigate, Link } from "react-router-dom";

import "./App.css";

import nounData from './word_list_noun.txt';
import adjData from './word_list_adj.txt';

import mongoose, { Schema } from 'mongoose';

import { PostSchema } from "./PostSchema";

import axios from 'axios';

import { v4 as uuidv4 } from 'uuid';



// Short term solution -> Will fix this later
const adjs = "aberration,acquiesce,adulation,adversity,alacrity,ameliorate,amorphous,anachronistic,anathema,antithesis,apocryphal,ascetic,assiduous,atrophy,banal,benevolent,bohemian,bourgeois,brevity,brusque,byzantine,cajole,camaraderie,capitulate,carouse,caustic,cerebral,chagrin,clandestine,cognizant,commensurate,compendium,confluence,conglomeration,consanguineous,contingent,convoluted,cogent,corpulence,decadence,deleterious,demagogue,derivative,despot,diaphanous,dichotomy,disparage,ebullient,eccentric,eclectic,effervescent,effulgent,encumbrance,ephemeral,escapism,evanescent,evocative,expiate,extrapolate,facade,falsetto,feckless,flocculent,foreboding,formidable,garrulous,gauche,grandiose,gratuitous,gregarious,gumption,hegemony,iconoclast,idiomatic,impecunious,impervious,improvident,incognito,incongruent,incorrigible,indomitable,infinitesimal,insouciant,interlocutor,interminable,intransigent,juxtapose,laconic,languid,legerdemain,loquacious,lugubrious,malaise,maudlin,meticulous,misnomer,modicum,moniker,myriad,nefarious,neophyte,obdurate,obfuscate,obsequious,palpable,paradigm,paragon,pejorative,pellucid,penultimate,perfidious,perspicuous,petrichor,philistine,platitude,plethora,poignant,pragmatic,precocious,preponderance,propensity,propriety,proselytize,quagmire,quintessential,quixotic,rancor,redolent,reprisal,reticent,reverie,rhetoric,sesquipedalian,sagacity,sagacious,serendipity,solipsism,sonorous,sophomoric,spurious,stoic,stolid,stymie,surreptitious,taciturn,tautology,temerity,tenacious,terse,torpid,transcend,transmute,trepidation,trite,ubiquitous,unobtrusive,untenable,vacuous,vanguard,variegated,venerable,verbosity,vestige,vex,vicissitude,vivacious,wax,wane,xenophobia,yammer,zealot,zealous,absolution,acumen,adroit,aesthetic,affable,allegory,ambiguous,anomaly,antipathy,apathy,atypical,audacious,auspicious,autonomous,aversion,beleaguer,belligerent,beseech,brooding,capricious,cathartic,celestial,cohesive,concur,conundrum,contend,convivial,covet,cynical,deferential,dextrous,didactic,disdain,embellish,embezzle,emulate,endemic,enigma,euphoric,exacerbate,exemplary,expedient,fabulist,flippant,fortuitous,futile,garrulous,homogeneous,hyperbole,indomitable,ineffable,innocuous,insular,invective,irascible,laudable,licentious,mirth,misanthrope,negligible,nebulous,omnipotent,parsimony,pensonious,pernicious,perspicacity,placate,plausible,prudent,querulous,recalcitrant,repudiate,revile,sardonic,scathing,scurrilous,soporific,specious,sporadic,subjugate,succinct,sycophant,torpor,tyranny,unilateral,veracity,vexatious,wistful,zenith,zephyr";
const nouns = "aestheticism,allusion,anecdote,anomaly,antagonist,apex,apparition,archetype,atrocity,audacity,aversion,barrage,befuddlement,blight,cacophony,cadence,clamor,cogitation,complacency,conclave,conjecture,connoisseur,contempt,convergence,crypt,cull,deception,decipherment,depiction,desolation,dichotomy,discrepancy,dissemination,divergence,diversion,effigy,eloquence,emancipation,emporium,encroachment,enucleation,enunciation,euphemism,exaltation,expatriate,extrapolation,façade,fallacy,fanaticism,fermentation,ferocity,flamboyancy,fortitude,fugue,fulmination,gastronomy,grandeur,grapnel,haggler,heresy,humility,idiom,impudence,incursion,indignation,inferno,infinitude,ingenuity,inhibition,inundation,iridescence,juxtaposition,kudos,levity,lyricism,maelstrom,menagerie,mercenary,metamorphosis,métier,microcosm,modulation,mystique,nexus,nominee,obscurity,obtuseness,occlusion,omission,optimum,oration,ornamentation,overstatement,pacifist,paradox,perseverance,perversion,philanthropy,piety,plurality,polemics,predilection,profanity,proliferation,propensity,prowess,pseudonym,quandary,quintessence,raconteur,rancidity,recompense,rectitude,refinement,relapse,renegade,reprisal,repulsion,reverberation,revulsion,rigour,rogue,sadist,serenity,serfdom,silhouette,skepticism,sobriety,splendor,subterfuge,suppression,susceptibility,taboo,tantalization,tenacity,transmutation,transparency,treachery,tyranny,ubiquity,ulterior,understatement,unison,urbane,vacuum,vagueness,valor,ventriloquist,vignette,wit,wrangler,zeal";

const Create = () => {

    const createPost = () => {
        const postData = {
            title: title,
            content: content,
            date: new Date(),
            likes: 0,
        };
    
        axios.post("http://localhost:3001/create", postData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    };

    const navigate = useNavigate();

    const [randomWords, setRandomWords] = useState([]);
    const [generated, setGenerated] = useState(false);

    useEffect(() => {
        const nounArray = nouns.split(",");
        const adjArray = adjs.split(",");

        console.log(nounArray);

        const getRandomWord = (array) => array[Math.floor(Math.random() * array.length)];
        const noun = getRandomWord(nounArray);
        const adj = getRandomWord(adjArray);
        const adj2 = getRandomWord(adjArray);

        setRandomWords([adj, noun, adj2]);
    }, [generated]);

    const fillPreview = () => {
        document.querySelector(".post-list.create").style.display = "block";
    }

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const checkPost = () => {

        const totalLength = title.length + content.length;
        if (totalLength > 1000 || !title.trim() || !content.trim()) {
            return false;
        }

        for (const word of randomWords) {
            if (!(title.includes(word) || content.includes(word))) {
                return false;
            }
        }

        alert('good job!')
        // call createPost()
        createPost();
        return true;
    }

    return (
        <>
            <div className="h top-header">
                <div className="h top-header-content">
                    <div className="h logo-name">
                        Triple
                    </div>
                </div>
                <div className="h top-header-content">
                    <span id="unselected" onClick={() => navigate("/")}>Posts</span>
                </div>
                <div className="h top-header-content">
                    <span id="selected">Create</span>
                </div>
                <div className="h top-header-content">
                    <span id="unselected" onClick={() => navigate("/About")}>About</span>
                </div>
            </div>

            <div className="main-content create">
                <div className="create-post-wrapper">

                    <div className="triple_holder">
                        <div className="triple t">{randomWords[0]}</div>
                        <div className="triple t">{randomWords[1]}</div>
                        <div className="triple t">{randomWords[2]}</div>
                    </div>

                    <div className="create-post-div">
                        <input className="create-post-input" placeholder="Title" onChange={(event) => setTitle(event.target.value)}></input>
                        <textarea className="create-post-input content" placeholder="Content" onChange={(event) => setContent(event.target.value)}></textarea>
                    </div>
                    
                    <div className="post-list create">
                        <div className="post">
                            <p className="post-title">{title}</p>
                            <p className="post-content">{content}</p>
                        </div>
                    </div>

                    <div className="char_limit">
                        <p className="char_count" style={{ color: title.length + content.length > 1000 ? 'red' : 'black' }}>
                            Character Limit: {title.length + content.length}/1000
                        </p>
                    </div>

                </div>

                <div className="sidebar">
                    <button className="sb button" onClick={() => setGenerated(!generated)}>Regenerate Triple</button>
                    <button className="sb button" onClick={fillPreview}>Preview</button>
                    <button className="sb button" onClick={() => checkPost()}>Post</button>
                </div>

            </div>

        </>
    )
}

export default Create;