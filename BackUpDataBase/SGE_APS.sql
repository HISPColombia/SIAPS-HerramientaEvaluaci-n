--
-- PostgreSQL database dump
--

-- Dumped from database version 9.4.0
-- Dumped by pg_dump version 9.5.1

-- Started on 2016-09-19 15:06:11

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 11855)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2314 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

--
-- TOC entry 173 (class 1259 OID 98436)
-- Name: phcphase_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE phcphase_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE phcphase_seq OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 174 (class 1259 OID 98438)
-- Name: PHCPhase; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "PHCPhase" (
    phoid numeric DEFAULT nextval('phcphase_seq'::regclass) NOT NULL,
    phaseid numeric NOT NULL,
    phdimension numeric,
    phdimension2 numeric,
    phdimension3 numeric
);


ALTER TABLE "PHCPhase" OWNER TO postgres;

--
-- TOC entry 175 (class 1259 OID 98445)
-- Name: attibute_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE attibute_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE attibute_seq OWNER TO postgres;

--
-- TOC entry 176 (class 1259 OID 98447)
-- Name: attribute; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE attribute (
    atoid numeric DEFAULT nextval('attibute_seq'::regclass) NOT NULL,
    atname character varying(100) NOT NULL,
    sfoid numeric NOT NULL
);


ALTER TABLE attribute OWNER TO postgres;

--
-- TOC entry 177 (class 1259 OID 98454)
-- Name: dimension_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE dimension_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE dimension_seq OWNER TO postgres;

--
-- TOC entry 178 (class 1259 OID 98456)
-- Name: dimension; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE dimension (
    dioid numeric DEFAULT nextval('dimension_seq'::regclass) NOT NULL,
    diname character varying(100) NOT NULL
);


ALTER TABLE dimension OWNER TO postgres;

--
-- TOC entry 179 (class 1259 OID 98463)
-- Name: facility_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE facility_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE facility_seq OWNER TO postgres;

--
-- TOC entry 180 (class 1259 OID 98465)
-- Name: facility; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE facility (
    faoid numeric DEFAULT nextval('facility_seq'::regclass) NOT NULL,
    faname character varying(100) NOT NULL,
    tfoid numeric NOT NULL
);


ALTER TABLE facility OWNER TO postgres;

--
-- TOC entry 181 (class 1259 OID 98472)
-- Name: feature_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE feature_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE feature_seq OWNER TO postgres;

--
-- TOC entry 182 (class 1259 OID 98474)
-- Name: feature; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE feature (
    feoid numeric DEFAULT nextval('feature_seq'::regclass) NOT NULL,
    fename character varying(100) NOT NULL,
    suoid numeric NOT NULL
);


ALTER TABLE feature OWNER TO postgres;

--
-- TOC entry 183 (class 1259 OID 98481)
-- Name: method_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE method_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE method_seq OWNER TO postgres;

--
-- TOC entry 184 (class 1259 OID 98483)
-- Name: method; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE method (
    mtoid numeric DEFAULT nextval('method_seq'::regclass) NOT NULL,
    mtname character varying(100) NOT NULL,
    mtdescription text,
    meoid numeric NOT NULL
);


ALTER TABLE method OWNER TO postgres;

--
-- TOC entry 185 (class 1259 OID 98490)
-- Name: methodology_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE methodology_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE methodology_seq OWNER TO postgres;

--
-- TOC entry 186 (class 1259 OID 98492)
-- Name: methodology; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE methodology (
    meoid numeric DEFAULT nextval('methodology_seq'::regclass) NOT NULL,
    mename character varying(100) NOT NULL,
    medescription text,
    mestatus numeric NOT NULL,
    veoid numeric NOT NULL,
    meauthor character varying(100)
);


ALTER TABLE methodology OWNER TO postgres;

--
-- TOC entry 187 (class 1259 OID 98499)
-- Name: metric_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE metric_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE metric_seq OWNER TO postgres;

--
-- TOC entry 188 (class 1259 OID 98501)
-- Name: metric; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE metric (
    meoid numeric DEFAULT nextval('metric_seq'::regclass) NOT NULL,
    atoid numeric NOT NULL,
    mename character varying(100) NOT NULL,
    meformula character varying(255) NOT NULL,
    mevaluemax numeric NOT NULL,
    mevaluemin numeric NOT NULL,
    melinebasevalref character varying(100),
    metipeindicador character varying NOT NULL
);


ALTER TABLE metric OWNER TO postgres;

--
-- TOC entry 189 (class 1259 OID 98508)
-- Name: optionquestion_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE optionquestion_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE optionquestion_seq OWNER TO postgres;

--
-- TOC entry 190 (class 1259 OID 98510)
-- Name: optionquestion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE optionquestion (
    oqoid numeric DEFAULT nextval('optionquestion_seq'::regclass) NOT NULL,
    quoid numeric NOT NULL,
    oqdescription character varying(255) NOT NULL
);


ALTER TABLE optionquestion OWNER TO postgres;

--
-- TOC entry 191 (class 1259 OID 98517)
-- Name: participation_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE participation_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE participation_seq OWNER TO postgres;

--
-- TOC entry 192 (class 1259 OID 98519)
-- Name: participation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE participation (
    proid numeric DEFAULT nextval('participation_seq'::regclass) NOT NULL,
    faoid numeric NOT NULL,
    phoid numeric NOT NULL
);


ALTER TABLE participation OWNER TO postgres;

--
-- TOC entry 193 (class 1259 OID 98526)
-- Name: person_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE person_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE person_seq OWNER TO postgres;

--
-- TOC entry 194 (class 1259 OID 98528)
-- Name: person; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE person (
    peoid numeric DEFAULT nextval('person_seq'::regclass) NOT NULL,
    peidentify character varying(30),
    pename character varying(100),
    pesurname character varying(100),
    pestudies text,
    peprofdescription text,
    pemail character varying(60),
    petelephon numeric
);


ALTER TABLE person OWNER TO postgres;

--
-- TOC entry 195 (class 1259 OID 98535)
-- Name: project_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE project_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE project_seq OWNER TO postgres;

--
-- TOC entry 196 (class 1259 OID 98537)
-- Name: project; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE project (
    proid numeric DEFAULT nextval('project_seq'::regclass) NOT NULL,
    prname text NOT NULL,
    prstatus character varying(20),
    prdateend date
);


ALTER TABLE project OWNER TO postgres;

--
-- TOC entry 197 (class 1259 OID 98544)
-- Name: question_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE question_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE question_seq OWNER TO postgres;

--
-- TOC entry 198 (class 1259 OID 98546)
-- Name: question; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE question (
    quoid numeric DEFAULT nextval('question_seq'::regclass) NOT NULL,
    qucode character varying(100) NOT NULL,
    ququestion text NOT NULL,
    mtoid numeric NOT NULL,
    feoid numeric NOT NULL
);


ALTER TABLE question OWNER TO postgres;

--
-- TOC entry 199 (class 1259 OID 98553)
-- Name: responsevalue_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE responsevalue_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE responsevalue_seq OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 98555)
-- Name: responsevalue; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE responsevalue (
    rvoid numeric DEFAULT nextval('responsevalue_seq'::regclass) NOT NULL,
    vaoid numeric NOT NULL,
    rvvalue numeric NOT NULL,
    rvdate date NOT NULL,
    usoid numeric NOT NULL
);


ALTER TABLE responsevalue OWNER TO postgres;

--
-- TOC entry 201 (class 1259 OID 98562)
-- Name: role_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE role_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE role_seq OWNER TO postgres;

--
-- TOC entry 202 (class 1259 OID 98564)
-- Name: role; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE role (
    rooid numeric DEFAULT nextval('role_seq'::regclass) NOT NULL,
    rodescription character varying(100) NOT NULL,
    roinitials character(10) NOT NULL
);


ALTER TABLE role OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 98571)
-- Name: rolesubdimension_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE rolesubdimension_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE rolesubdimension_seq OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 98573)
-- Name: rolesubdimension; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE rolesubdimension (
    rsoid numeric DEFAULT nextval('rolesubdimension_seq'::regclass) NOT NULL,
    suoid numeric NOT NULL,
    rooid numeric NOT NULL
);


ALTER TABLE rolesubdimension OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 98580)
-- Name: subdimension_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE subdimension_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE subdimension_seq OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 98582)
-- Name: subdimension; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE subdimension (
    suoid numeric DEFAULT nextval('subdimension_seq'::regclass) NOT NULL,
    suname character varying(100) NOT NULL,
    dioid numeric NOT NULL
);


ALTER TABLE subdimension OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 98589)
-- Name: subfeature_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE subfeature_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE subfeature_seq OWNER TO postgres;

--
-- TOC entry 208 (class 1259 OID 98591)
-- Name: subfeature; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE subfeature (
    sfoid numeric DEFAULT nextval('subfeature_seq'::regclass) NOT NULL,
    sfname character varying(100) NOT NULL,
    feoid numeric NOT NULL
);


ALTER TABLE subfeature OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 98598)
-- Name: teamproject_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE teamproject_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE teamproject_seq OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 98600)
-- Name: teamproject; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE teamproject (
    tpoid numeric DEFAULT nextval('teamproject_seq'::regclass) NOT NULL,
    proid numeric NOT NULL,
    usoidleader numeric NOT NULL,
    usoidtech numeric NOT NULL
);


ALTER TABLE teamproject OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 98607)
-- Name: tipequestion_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE tipequestion_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE tipequestion_seq OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 98609)
-- Name: typefacility_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE typefacility_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE typefacility_seq OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 98611)
-- Name: typefacility; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE typefacility (
    tfoid numeric DEFAULT nextval('typefacility_seq'::regclass) NOT NULL,
    tfname character varying(100) NOT NULL
);


ALTER TABLE typefacility OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 98618)
-- Name: typequestion; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE typequestion (
    tqoid numeric DEFAULT nextval('tipequestion_seq'::regclass) NOT NULL,
    tqdescription character varying(100) NOT NULL,
    tqstate numeric(1,0) NOT NULL
);


ALTER TABLE typequestion OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 98625)
-- Name: user_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE user_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE user_seq OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 98627)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE "user" (
    usoid numeric DEFAULT nextval('user_seq'::regclass) NOT NULL,
    usname character varying(100) NOT NULL,
    uspassword character varying NOT NULL,
    peoid numeric NOT NULL,
    usstatus numeric NOT NULL
);


ALTER TABLE "user" OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 98634)
-- Name: userrol_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE userrol_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE userrol_seq OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 98636)
-- Name: userrole; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE userrole (
    uroid numeric DEFAULT nextval('userrol_seq'::regclass) NOT NULL,
    usoid numeric NOT NULL,
    rooid numeric NOT NULL
);


ALTER TABLE userrole OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 98643)
-- Name: variable_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE variable_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE variable_seq OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 98645)
-- Name: variable; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE variable (
    vaoid numeric DEFAULT nextval('variable_seq'::regclass) NOT NULL,
    meoid numeric NOT NULL,
    vaname character varying(100) NOT NULL,
    vatypevalue character varying(100) NOT NULL
);


ALTER TABLE variable OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 98652)
-- Name: version_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE version_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
    CYCLE;


ALTER TABLE version_seq OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 98654)
-- Name: version; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE version (
    veoid numeric DEFAULT nextval('version_seq'::regclass) NOT NULL,
    venumber numeric NOT NULL
);


ALTER TABLE version OWNER TO postgres;

--
-- TOC entry 2258 (class 0 OID 98438)
-- Dependencies: 174
-- Data for Name: PHCPhase; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "PHCPhase" (phoid, phaseid, phdimension, phdimension2, phdimension3) FROM stdin;
\.


--
-- TOC entry 2315 (class 0 OID 0)
-- Dependencies: 175
-- Name: attibute_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('attibute_seq', 1, true);


--
-- TOC entry 2260 (class 0 OID 98447)
-- Dependencies: 176
-- Data for Name: attribute; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY attribute (atoid, atname, sfoid) FROM stdin;
1	xxxxxx	1
2	yyy	1
\.


--
-- TOC entry 2262 (class 0 OID 98456)
-- Dependencies: 178
-- Data for Name: dimension; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY dimension (dioid, diname) FROM stdin;
1	dimension1
\.


--
-- TOC entry 2316 (class 0 OID 0)
-- Dependencies: 177
-- Name: dimension_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('dimension_seq', 1, true);


--
-- TOC entry 2264 (class 0 OID 98465)
-- Dependencies: 180
-- Data for Name: facility; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY facility (faoid, faname, tfoid) FROM stdin;
\.


--
-- TOC entry 2317 (class 0 OID 0)
-- Dependencies: 179
-- Name: facility_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('facility_seq', 1, false);


--
-- TOC entry 2266 (class 0 OID 98474)
-- Dependencies: 182
-- Data for Name: feature; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY feature (feoid, fename, suoid) FROM stdin;
1	feature1	1
\.


--
-- TOC entry 2318 (class 0 OID 0)
-- Dependencies: 181
-- Name: feature_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('feature_seq', 1, true);


--
-- TOC entry 2268 (class 0 OID 98483)
-- Dependencies: 184
-- Data for Name: method; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY method (mtoid, mtname, mtdescription, meoid) FROM stdin;
1	Mt01	METODO 01	1
\.


--
-- TOC entry 2319 (class 0 OID 0)
-- Dependencies: 183
-- Name: method_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('method_seq', 1, true);


--
-- TOC entry 2270 (class 0 OID 98492)
-- Dependencies: 186
-- Data for Name: methodology; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY methodology (meoid, mename, medescription, mestatus, veoid, meauthor) FROM stdin;
2	MT02	METODOLOGIA 02	1	1	LCOBO
1	MT03	METODOLOGIA 03	1	1	LCOBO
\.


--
-- TOC entry 2320 (class 0 OID 0)
-- Dependencies: 185
-- Name: methodology_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('methodology_seq', 2, true);


--
-- TOC entry 2272 (class 0 OID 98501)
-- Dependencies: 188
-- Data for Name: metric; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY metric (meoid, atoid, mename, meformula, mevaluemax, mevaluemin, melinebasevalref, metipeindicador) FROM stdin;
1	1	mt01	form01	99	1	base	indicccc
3	2	mt03	form03	99	1	base	indicccc3
\.


--
-- TOC entry 2321 (class 0 OID 0)
-- Dependencies: 187
-- Name: metric_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('metric_seq', 3, true);


--
-- TOC entry 2274 (class 0 OID 98510)
-- Dependencies: 190
-- Data for Name: optionquestion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY optionquestion (oqoid, quoid, oqdescription) FROM stdin;
2	3	xxxxxx
\.


--
-- TOC entry 2322 (class 0 OID 0)
-- Dependencies: 189
-- Name: optionquestion_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('optionquestion_seq', 2, true);


--
-- TOC entry 2276 (class 0 OID 98519)
-- Dependencies: 192
-- Data for Name: participation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY participation (proid, faoid, phoid) FROM stdin;
\.


--
-- TOC entry 2323 (class 0 OID 0)
-- Dependencies: 191
-- Name: participation_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('participation_seq', 1, false);


--
-- TOC entry 2278 (class 0 OID 98528)
-- Dependencies: 194
-- Data for Name: person; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY person (peoid, peidentify, pename, pesurname, pestudies, peprofdescription, pemail, petelephon) FROM stdin;
2	16893413	Leonardo Andres	Cobo Molina	Ingeniero	Esp Redes	lcobo@tics.co	3148803448
3	34331472	Nancy Piedad	Muñoz Lopez	Bachiller	\N	nancy@gmail.com	8363130
4	1058538	Andres Felipe	Cobo Muñoz	Futbolista Prof	Esp Redes	lcobo@tics.co	3148803448
\.


--
-- TOC entry 2324 (class 0 OID 0)
-- Dependencies: 193
-- Name: person_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('person_seq', 4, true);


--
-- TOC entry 2325 (class 0 OID 0)
-- Dependencies: 173
-- Name: phcphase_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('phcphase_seq', 1, false);


--
-- TOC entry 2280 (class 0 OID 98537)
-- Dependencies: 196
-- Data for Name: project; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY project (proid, prname, prstatus, prdateend) FROM stdin;
\.


--
-- TOC entry 2326 (class 0 OID 0)
-- Dependencies: 195
-- Name: project_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('project_seq', 1, false);


--
-- TOC entry 2282 (class 0 OID 98546)
-- Dependencies: 198
-- Data for Name: question; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY question (quoid, qucode, ququestion, mtoid, feoid) FROM stdin;
3	Q001	Question1	1	1
\.


--
-- TOC entry 2327 (class 0 OID 0)
-- Dependencies: 197
-- Name: question_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('question_seq', 3, true);


--
-- TOC entry 2284 (class 0 OID 98555)
-- Dependencies: 200
-- Data for Name: responsevalue; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY responsevalue (rvoid, vaoid, rvvalue, rvdate, usoid) FROM stdin;
\.


--
-- TOC entry 2328 (class 0 OID 0)
-- Dependencies: 199
-- Name: responsevalue_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('responsevalue_seq', 1, false);


--
-- TOC entry 2286 (class 0 OID 98564)
-- Dependencies: 202
-- Data for Name: role; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY role (rooid, rodescription, roinitials) FROM stdin;
1	Adminsitrator	ADM       
\.


--
-- TOC entry 2329 (class 0 OID 0)
-- Dependencies: 201
-- Name: role_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('role_seq', 1, true);


--
-- TOC entry 2288 (class 0 OID 98573)
-- Dependencies: 204
-- Data for Name: rolesubdimension; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY rolesubdimension (rsoid, suoid, rooid) FROM stdin;
1	1	1
\.


--
-- TOC entry 2330 (class 0 OID 0)
-- Dependencies: 203
-- Name: rolesubdimension_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('rolesubdimension_seq', 1, true);


--
-- TOC entry 2290 (class 0 OID 98582)
-- Dependencies: 206
-- Data for Name: subdimension; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY subdimension (suoid, suname, dioid) FROM stdin;
1	subdimension1111	1
\.


--
-- TOC entry 2331 (class 0 OID 0)
-- Dependencies: 205
-- Name: subdimension_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('subdimension_seq', 1, true);


--
-- TOC entry 2292 (class 0 OID 98591)
-- Dependencies: 208
-- Data for Name: subfeature; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY subfeature (sfoid, sfname, feoid) FROM stdin;
1	xxxxxx	1
\.


--
-- TOC entry 2332 (class 0 OID 0)
-- Dependencies: 207
-- Name: subfeature_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('subfeature_seq', 1, true);


--
-- TOC entry 2294 (class 0 OID 98600)
-- Dependencies: 210
-- Data for Name: teamproject; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY teamproject (tpoid, proid, usoidleader, usoidtech) FROM stdin;
\.


--
-- TOC entry 2333 (class 0 OID 0)
-- Dependencies: 209
-- Name: teamproject_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('teamproject_seq', 1, false);


--
-- TOC entry 2334 (class 0 OID 0)
-- Dependencies: 211
-- Name: tipequestion_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('tipequestion_seq', 1, true);


--
-- TOC entry 2297 (class 0 OID 98611)
-- Dependencies: 213
-- Data for Name: typefacility; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY typefacility (tfoid, tfname) FROM stdin;
\.


--
-- TOC entry 2335 (class 0 OID 0)
-- Dependencies: 212
-- Name: typefacility_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('typefacility_seq', 1, false);


--
-- TOC entry 2298 (class 0 OID 98618)
-- Dependencies: 214
-- Data for Name: typequestion; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY typequestion (tqoid, tqdescription, tqstate) FROM stdin;
1	TP 0001	1
\.


--
-- TOC entry 2300 (class 0 OID 98627)
-- Dependencies: 216
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY "user" (usoid, usname, uspassword, peoid, usstatus) FROM stdin;
2	Felipe	tics@6911	2	1
4	Samuel	tics@6911	2	1
5	Lcobo	lcobo@6911	2	1
3	yyyy	tics@6911	2	1
7	Ultimo777	tics@6911	2	1
\.


--
-- TOC entry 2336 (class 0 OID 0)
-- Dependencies: 215
-- Name: user_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('user_seq', 7, true);


--
-- TOC entry 2337 (class 0 OID 0)
-- Dependencies: 217
-- Name: userrol_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('userrol_seq', 2, true);


--
-- TOC entry 2302 (class 0 OID 98636)
-- Dependencies: 218
-- Data for Name: userrole; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY userrole (uroid, usoid, rooid) FROM stdin;
1	2	1
2	3	1
\.


--
-- TOC entry 2304 (class 0 OID 98645)
-- Dependencies: 220
-- Data for Name: variable; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY variable (vaoid, meoid, vaname, vatypevalue) FROM stdin;
1	1	var1	String
\.


--
-- TOC entry 2338 (class 0 OID 0)
-- Dependencies: 219
-- Name: variable_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('variable_seq', 1, true);


--
-- TOC entry 2306 (class 0 OID 98654)
-- Dependencies: 222
-- Data for Name: version; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY version (veoid, venumber) FROM stdin;
1	1
2	2
\.


--
-- TOC entry 2339 (class 0 OID 0)
-- Dependencies: 221
-- Name: version_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('version_seq', 2, true);


--
-- TOC entry 2076 (class 2606 OID 98662)
-- Name: PHCPhase_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "PHCPhase"
    ADD CONSTRAINT "PHCPhase_pkey" PRIMARY KEY (phoid);


--
-- TOC entry 2078 (class 2606 OID 98664)
-- Name: attribute_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY attribute
    ADD CONSTRAINT attribute_pkey PRIMARY KEY (atoid);


--
-- TOC entry 2080 (class 2606 OID 98666)
-- Name: dimension_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY dimension
    ADD CONSTRAINT dimension_pkey PRIMARY KEY (dioid);


--
-- TOC entry 2082 (class 2606 OID 98668)
-- Name: facility_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY facility
    ADD CONSTRAINT facility_pkey PRIMARY KEY (faoid);


--
-- TOC entry 2084 (class 2606 OID 98670)
-- Name: feature_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY feature
    ADD CONSTRAINT feature_pkey PRIMARY KEY (feoid);


--
-- TOC entry 2086 (class 2606 OID 98672)
-- Name: method_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY method
    ADD CONSTRAINT method_pkey PRIMARY KEY (mtoid);


--
-- TOC entry 2088 (class 2606 OID 98674)
-- Name: methodology_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY methodology
    ADD CONSTRAINT methodology_pkey PRIMARY KEY (meoid);


--
-- TOC entry 2090 (class 2606 OID 98676)
-- Name: metric_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY metric
    ADD CONSTRAINT metric_pkey PRIMARY KEY (meoid);


--
-- TOC entry 2092 (class 2606 OID 98678)
-- Name: optionquestion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY optionquestion
    ADD CONSTRAINT optionquestion_pkey PRIMARY KEY (oqoid);


--
-- TOC entry 2094 (class 2606 OID 98680)
-- Name: participation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY participation
    ADD CONSTRAINT participation_pkey PRIMARY KEY (proid);


--
-- TOC entry 2096 (class 2606 OID 98682)
-- Name: person_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY person
    ADD CONSTRAINT person_pkey PRIMARY KEY (peoid);


--
-- TOC entry 2098 (class 2606 OID 98684)
-- Name: project_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY project
    ADD CONSTRAINT project_pkey PRIMARY KEY (proid);


--
-- TOC entry 2100 (class 2606 OID 98686)
-- Name: question_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY question
    ADD CONSTRAINT question_pkey PRIMARY KEY (quoid);


--
-- TOC entry 2102 (class 2606 OID 98688)
-- Name: responsevalue_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY responsevalue
    ADD CONSTRAINT responsevalue_pkey PRIMARY KEY (rvoid);


--
-- TOC entry 2104 (class 2606 OID 98690)
-- Name: role_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY role
    ADD CONSTRAINT role_pkey PRIMARY KEY (rooid);


--
-- TOC entry 2106 (class 2606 OID 98692)
-- Name: rolesubdimension_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY rolesubdimension
    ADD CONSTRAINT rolesubdimension_pkey PRIMARY KEY (rsoid);


--
-- TOC entry 2108 (class 2606 OID 98694)
-- Name: subdimension_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY subdimension
    ADD CONSTRAINT subdimension_pkey PRIMARY KEY (suoid);


--
-- TOC entry 2110 (class 2606 OID 98696)
-- Name: subfeature_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY subfeature
    ADD CONSTRAINT subfeature_pkey PRIMARY KEY (sfoid);


--
-- TOC entry 2112 (class 2606 OID 98698)
-- Name: teamproject_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY teamproject
    ADD CONSTRAINT teamproject_pkey PRIMARY KEY (tpoid);


--
-- TOC entry 2114 (class 2606 OID 98700)
-- Name: typefacility_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY typefacility
    ADD CONSTRAINT typefacility_pkey PRIMARY KEY (tfoid);


--
-- TOC entry 2116 (class 2606 OID 98702)
-- Name: typequestion_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY typequestion
    ADD CONSTRAINT typequestion_pkey PRIMARY KEY (tqoid);


--
-- TOC entry 2118 (class 2606 OID 98704)
-- Name: user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (usoid);


--
-- TOC entry 2120 (class 2606 OID 98706)
-- Name: userrole_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY userrole
    ADD CONSTRAINT userrole_pkey PRIMARY KEY (uroid);


--
-- TOC entry 2122 (class 2606 OID 98708)
-- Name: variable_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY variable
    ADD CONSTRAINT variable_pkey PRIMARY KEY (vaoid);


--
-- TOC entry 2124 (class 2606 OID 98710)
-- Name: version_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY version
    ADD CONSTRAINT version_pkey PRIMARY KEY (veoid);


--
-- TOC entry 2125 (class 2606 OID 98711)
-- Name: attribute_sfoid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY attribute
    ADD CONSTRAINT attribute_sfoid_fkey FOREIGN KEY (sfoid) REFERENCES subfeature(sfoid);


--
-- TOC entry 2126 (class 2606 OID 98716)
-- Name: facility_tfoid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY facility
    ADD CONSTRAINT facility_tfoid_fkey FOREIGN KEY (tfoid) REFERENCES typefacility(tfoid);


--
-- TOC entry 2127 (class 2606 OID 98827)
-- Name: feature_suoid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY feature
    ADD CONSTRAINT feature_suoid_fkey FOREIGN KEY (suoid) REFERENCES subdimension(suoid);


--
-- TOC entry 2128 (class 2606 OID 98721)
-- Name: method_meoid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY method
    ADD CONSTRAINT method_meoid_fkey FOREIGN KEY (meoid) REFERENCES methodology(meoid);


--
-- TOC entry 2129 (class 2606 OID 98726)
-- Name: methodology_veoid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY methodology
    ADD CONSTRAINT methodology_veoid_fkey FOREIGN KEY (veoid) REFERENCES version(veoid);


--
-- TOC entry 2130 (class 2606 OID 98731)
-- Name: metric_atoid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY metric
    ADD CONSTRAINT metric_atoid_fkey FOREIGN KEY (atoid) REFERENCES attribute(atoid);


--
-- TOC entry 2131 (class 2606 OID 98736)
-- Name: optionquestion_quoid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY optionquestion
    ADD CONSTRAINT optionquestion_quoid_fkey FOREIGN KEY (quoid) REFERENCES question(quoid);


--
-- TOC entry 2132 (class 2606 OID 98741)
-- Name: participation_phoid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY participation
    ADD CONSTRAINT participation_phoid_fkey FOREIGN KEY (phoid) REFERENCES "PHCPhase"(phoid);


--
-- TOC entry 2133 (class 2606 OID 98746)
-- Name: question_feoid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY question
    ADD CONSTRAINT question_feoid_fkey FOREIGN KEY (feoid) REFERENCES feature(feoid);


--
-- TOC entry 2134 (class 2606 OID 98751)
-- Name: question_mtoid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY question
    ADD CONSTRAINT question_mtoid_fkey FOREIGN KEY (mtoid) REFERENCES method(mtoid);


--
-- TOC entry 2135 (class 2606 OID 98761)
-- Name: responsevalue_usoid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY responsevalue
    ADD CONSTRAINT responsevalue_usoid_fkey FOREIGN KEY (usoid) REFERENCES "user"(usoid);


--
-- TOC entry 2136 (class 2606 OID 98766)
-- Name: responsevalue_vaoid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY responsevalue
    ADD CONSTRAINT responsevalue_vaoid_fkey FOREIGN KEY (vaoid) REFERENCES variable(vaoid);


--
-- TOC entry 2137 (class 2606 OID 98771)
-- Name: rolesubdimension_rooid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY rolesubdimension
    ADD CONSTRAINT rolesubdimension_rooid_fkey FOREIGN KEY (rooid) REFERENCES role(rooid);


--
-- TOC entry 2138 (class 2606 OID 98776)
-- Name: rolesubdimension_suoid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY rolesubdimension
    ADD CONSTRAINT rolesubdimension_suoid_fkey FOREIGN KEY (suoid) REFERENCES subdimension(suoid);


--
-- TOC entry 2139 (class 2606 OID 98781)
-- Name: subdimension_dioid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY subdimension
    ADD CONSTRAINT subdimension_dioid_fkey FOREIGN KEY (dioid) REFERENCES dimension(dioid);


--
-- TOC entry 2140 (class 2606 OID 98786)
-- Name: subfeature_feoid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY subfeature
    ADD CONSTRAINT subfeature_feoid_fkey FOREIGN KEY (feoid) REFERENCES feature(feoid);


--
-- TOC entry 2141 (class 2606 OID 98791)
-- Name: teamproject_proid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY teamproject
    ADD CONSTRAINT teamproject_proid_fkey FOREIGN KEY (proid) REFERENCES project(proid);


--
-- TOC entry 2142 (class 2606 OID 98796)
-- Name: teamproject_usoidleader_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY teamproject
    ADD CONSTRAINT teamproject_usoidleader_fkey FOREIGN KEY (usoidleader) REFERENCES "user"(usoid);


--
-- TOC entry 2143 (class 2606 OID 98801)
-- Name: teamproject_usoidtech_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY teamproject
    ADD CONSTRAINT teamproject_usoidtech_fkey FOREIGN KEY (usoidtech) REFERENCES "user"(usoid);


--
-- TOC entry 2144 (class 2606 OID 98806)
-- Name: user_peoid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY "user"
    ADD CONSTRAINT user_peoid_fkey FOREIGN KEY (peoid) REFERENCES person(peoid);


--
-- TOC entry 2145 (class 2606 OID 98811)
-- Name: userrole_rooid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY userrole
    ADD CONSTRAINT userrole_rooid_fkey FOREIGN KEY (rooid) REFERENCES role(rooid);


--
-- TOC entry 2146 (class 2606 OID 98816)
-- Name: userrole_usoid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY userrole
    ADD CONSTRAINT userrole_usoid_fkey FOREIGN KEY (usoid) REFERENCES "user"(usoid);


--
-- TOC entry 2147 (class 2606 OID 98821)
-- Name: variable_meoid_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY variable
    ADD CONSTRAINT variable_meoid_fkey FOREIGN KEY (meoid) REFERENCES metric(meoid);


--
-- TOC entry 2313 (class 0 OID 0)
-- Dependencies: 7
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2016-09-19 15:06:16

--
-- PostgreSQL database dump complete
--

