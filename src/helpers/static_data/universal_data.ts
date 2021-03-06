import { UniversalData } from "../../models/app";

const UniversalStaticData: UniversalData[] = [
    {
        ability: null,
        input: '6M',
        startup: '24',
        active: '6',
        recovery: '10',
        advantage: '+0 (block), +3 (hit)',
        gaurd: 'High',
        notes: 'Can cancel into air action while in sparking. Roshi is the only exception to this, his 6M is less active for 2 frames and has 2 frames more recovery.',
        img: `${'https://dbfz-image.s3.amazonaws.com/uploads/static-images/6M/image+(' + (Math.floor(Math.random() * 27) + 1) + ').png' }`
    },
    {
        ability: 'Assists',
        input: 'Assist Button 1 or 2',
        startup: 'Varies - See character details',
        active: 'Varies - See character details',
        recovery: 'Varies - See character details',
        advantage: 'Varies - See character details',
        gaurd: 'All',
        notes: 'Each character comes equipped with 3 assists. Assists will not begin recharging until the opponent has not been in blockstun for 20 frames. Once recharging has begun, A and B Type assists take 300 frames to charge. C assist Type will take 720 frames.',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/assist.gif',
    },
    {
        ability: 'Dragon Rush',
        input: 'L + M',
        startup: '19',
        active: '9',
        recovery: '24',
        advantage: 'N/A',
        gaurd: 'Throw',
        notes: 'Green flash occurs at 7f, Snapping at the very end adds more damage. Holding Dragon Rush during grab adds more hits.',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/dragon rush.gif',
    },
    {
        ability: 'Dragon Rush Snap',
        input: 'Assist button during Dragon Rush',
        startup: 'N/A',
        active: 'N/A',
        recovery: 'Instant',
        advantage: '41',
        gaurd: 'N/A',
        notes: 'Opponent 8f throw invulnerable upon getting snapped in. Removes all blue health of character being snapped in. Oppenent can vary incoming time.',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/snap.gif',
    },
    {
        ability: 'Super Dash',
        input: 'Input: H + S  ',
        startup: 'Minimum 21, Fullscreen 34',
        active: 'Until Contact',
        recovery: '10',
        advantage: '0, +5 (In spark)',
        gaurd: 'All',
        notes: 'Light projectile invuln frame 1 through active, Airborne on frame 5.',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/superdash.gif',
    },
    {
        ability: 'Reflect',
        input: '4 + S ',
        startup: '1',
        active: '22',
        recovery: '17',
        advantage: 'N/A',
        gaurd: 'N/A',
        notes: 'Succesful reflect enters 20 frame total invulnerability recovery period, throw invulnerable for 4 frames after recovery. Attacks dealt on reflect behave as on block (chains, blockstop etc.)',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/reflect.gif',
    },
    {
        ability: 'Ki-Charge',
        input: 'L + S',
        startup: '1',
        active: '55',
        recovery: 'N/A',
        advantage: 'N/A',
        gaurd: 'N/A',
        notes: 'Ki-charge now reflects Ki-blasts after frame 4. (Hang in the Broly) Can cancel into superdash from frame 30. Can also hold Ki-charge even if maxed.',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/charge.gif',
    },
    {
        ability: 'Gaurd Cancel',
        input: '6 + Assist on block   ',
        startup: 'Corner 21, ~28 Full',
        active: '2',
        recovery: '10',
        advantage: '-30 [20 air, 10 ground]',
        gaurd: 'All',
        notes: 'Invuln from frame 1 through actives or entering recovery, Freeze frame for 25 frames, becomes active in proximity, turns into SD upon connecting or whiff.	Costs 1 bar.',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/gaurd cancel.gif',
    },
    {
        ability: 'Guard Cancel (Solo)',
        input: '6 + Assist on block',
        startup: '15',
        active: '3',
        recovery: '25',
        advantage: '-12',
        gaurd: 'All',
        notes: 'Invuln from frames 1 - 33, Freeze frame for 25 frames, Disappears on frame 4. Costs 1 bar.',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/gaurd cancel solo.gif',
    },
    {
        ability: 'Vanish',
        input: 'M + H',
        startup: '13',
        active: '3',
        recovery: '14',
        advantage: '0, +2 when landing canceled',
        gaurd: 'All',
        notes: 'Invulnerable frames 4 - 8 (swaps sides, appears on frame 12), freeze frame on frame 7 and lasts for 40 frames. Costs 1 bar.',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/vanish.gif',
    },
    {
        ability: 'Empty Vanish (Spark Only)',
        input: '[M + H]',
        startup: 'N/A',
        active: '11 total animation frames',
        recovery: 'N/A',
        advantage: 'N/A',
        gaurd: 'All',
        notes: 'Invulnerable frame 4 - 8 (swaps sides, appears on frame 12 - recovers on the frame they appear), freeze frame on frame 7 and lasts for 40 frames. Costs 1 bar.',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/empty vanish.gif',
    },
    {
        ability: 'Spark',
        input: 'L + M + H + S',
        startup: '7',
        active: 'N/A',
        recovery: 'Ground: 24 + landing, Air: 27',
        advantage: '0f, -1 attack, -3 movement',
        gaurd: 'All',
        notes: 'Invulnerable frame 1 - 15, basically has added 3 frames cancellable landing recovery which causes move to be pseudo negative on block. Usable once per match, unless second is obtained from Shenron.',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/spark.gif',
    },
    {
        ability: 'Jump',
        input: '8',
        startup: '4',
        active: 'N/A',
        recovery: 'N/A',
        advantage: 'N/A',
        gaurd: 'N/A',
        notes: 'Throw invulnerable frame 1 - 4, Normal/Special/Vanish/SD cancellable on frame 6 (2nd frame airborne), Airdash cancellable on frame 8, can block on frame 5.',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/jump.gif',
    },
    {
        ability: 'Super Jump',
        input: '2 > 8',
        startup: 'N/A',
        active: 'N/A',
        recovery: 'N/A',
        advantage: 'N/A',
        gaurd: 'N/A',
        notes: 'Super-Jump sends you higher into the air.  Makes jump take 60 frames. (Based on counting from first pre-jump frame until they land.) Majin Buu has different values: 63 frames. Master Roshi can super jump but cannot float.',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/sj.gif',
    },
    {
        ability: 'Super Jump Float',
        input: '2 > [8]',
        startup: 'N/A',
        active: 'N/A',
        recovery: 'N/A',
        advantage: 'N/A',
        gaurd: 'N/A',
        notes: 'Super-Jump sends you higher into the air.  Makes jump take 71 frames. (Based on counting from first pre-jump frame until they land.) Holding 8 lets you float down slower. Majin Buu has different values: 68 frames. Master Roshi cannot float.',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/sjfloat.gif',
    },
    {
        ability: 'Super Jump Fast Fall',
        input: '2 > 8 > [2]',
        startup: 'N/A',
        active: 'N/A',
        recovery: 'N/A',
        advantage: 'N/A',
        gaurd: 'N/A',
        notes: 'Super-Jump sends you higher into the air. Makes jump take 42 frames. (Based on counting from first pre-jump frame until they land.) Holding 2 lets you fall down faster. Majin Buu has different values: 49 frames. Master Roshi cannot fast fall.',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/sjfastfall.gif',
    },
    {
        ability: 'Forward Air Dash',
        input: '6 > 6 while airborne',
        startup: '1',
        active: 'Animation frame 10',
        recovery: 'N/A',
        advantage: 'N/A',
        gaurd: 'N/A',
        notes: 'Normal/special/SD/Vanish cancellable from frame 7 and forward. (cannot block until animation is done.)',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/forward air dash.gif',
    },
    {
        ability: 'Air Backdash',
        input: '4 > 4 while airborne',
        startup: '1',
        active: 'Animation frames 15',
        recovery: 'N/A',
        advantage: 'N/A',
        gaurd: 'N/A',
        notes: 'Normal/special/SD/Vanish cancellable from frame 7 and forward. (cannot block until animation is done.) Throw invulnerable frames 1 - 15, any move cancelled from the dash will inherit throw invulnerability for the amount left on airdash recovery (i.e. cancelling to a jL on frame 11 will inherit throw invulnerability from frame 11 - 15.)',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/air backdash.gif',
    },
    {
        ability: 'Instant Air Dash (IAD) Forward',
        input: '9 > 5 > 6',
        startup: '5 + 2 + 6 + normal frames',
        active: 'N/A',
        recovery: 'N/A',
        advantage: 'N/A',
        gaurd: 'N/A',
        notes: '4th frame of jump is airdash cancellable, airdash takes 6f until cancellable. Fastest possible IAD overhead is 19 frames, when using a 6 frame overhead [5 frame Jump start-up + 2 frame to reach cancel + 6 frame airdash + normal]',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/instant air dash.gif',
    },
    {
        ability: 'Backdash',
        input: '4 > 4',
        startup: '1',
        active: '15 frame animation',
        recovery: 'N/A',
        advantage: 'N/A',
        gaurd: 'N/A',
        notes: 'Throw invulnerable frame 1 - 15, movement on frame 2.',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/backdash.gif',
    },
    {
        ability: 'Ground Recovery',
        input: 'Landing',
        startup: 'N/A',
        active: '3',
        recovery: 'N/A',
        advantage: 'N/A',
        gaurd: 'N/A',
        notes: 'Cancellable with normals / forward dash on frame 2. Can block on frame 1 of landing.',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/ground-recovery.gif',
    },
    {
        ability: 'Clash',
        input: 'N/A',
        startup: 'N/A',
        active: '3',
        recovery: 'N/A',
        advantage: 'N/A',
        gaurd: 'N/A',
        notes: "Clash is treated as connecting on block with the added option of being able to cancel to reflect and from some 4/5L's to another 4L. Freezes for 22 frames on clash.",
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/clash.gif',
    },
    {
        ability: 'Ground Tech',
        input: 'N/A',
        startup: 'N/A',
        active: 'Animation 22 frames',
        recovery: 'N/A',
        advantage: 'N/A',
        gaurd: 'N/A',
        notes: 'Full invulnerable during tech, Throw invulnerable for 8 frames after tech, Ground back/in place techs suffer immediate standard landing recovery after teching has finished.',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/groundtech.gif',
    },
    {
        ability: 'Delay Tech',
        input: '2 (While downed)',
        startup: 'N/A',
        active: 'Animation 15 frames',
        recovery: 'N/A',
        advantage: 'N/A',
        gaurd: 'N/A',
        notes: 'Full invulnerable during tech, Throw invulnerable for 8 frames after tech, Ground back/in place techs suffer immediate standard landing recovery after teching has finished. Can delay from 0 - 30 frames.',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/delay tech.gif',
    },
    {
        ability: 'Down Tech (Airborne)',
        input: '2 (before teching out)   ',
        startup: 'N/A',
        active: 'Animation 15 - 26 frames',
        recovery: 'N/A',
        advantage: 'N/A',
        gaurd: 'N/A',
        notes: 'Full invulnerable during tech, Throw invulnerable for 8 frames after tech, Ground back/in place techs suffer immediate standard landing recovery after teching has finished. Can delay from 0 - 30 frames. Standard landing recovery (5 frame invulnerable landing recovery if lands during tech invulnerability), Can recover before touching ground.',
        img: 'https://dbfz-image.s3.amazonaws.com/uploads/static-images/down tech.gif',
    },
]

export default UniversalStaticData;


// {
//     ability: '',
//     input: '',
//     startup: '',
//     active: '',
//     recovery: '',
//     advantage: '',
//     gaurd: '',
//     notes: '',
//     img: '',
// },