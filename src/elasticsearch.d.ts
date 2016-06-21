declare namespace elasticsearch {

    enum loggingLevels {
        error = 1,
        warning,
        info,
        debug,
        trace
    }

    interface ISSL {

        pfx?: string | Array<string>;
        key?: string;
        passphrase?: string;
        cert?: string;
        ca?: string | Array<string>;
        ciphers?: string;
        rejectAunauthorized?: boolean;
        secureProtocol?: string;
    }

    interface IClientParams {

        host?: string;
        hosts?: Array<string> | Array<Object>;
        log?: string | Array<string> | Object | Array<Object>;
        apiVersion?: string;
        plugins?: any; //more to this come back later
        sniffOnStart?: boolean;
        sniffInterval?: number;
        sniffOnConectionFault?: boolean;
        maxRetries?: number;
        requestTimeout?: number;
        deadTimeout?: number;
        pingTimeout?: number;
        keepAlive?: boolean;
        maxSockets?: number;
        minSockets?: number;
        suggestCompression?: boolean;
        connecitonClass?: "http" | "xhr" | "angular" | "jquery";
        sniffedNodesProtocol?: string;
        ssl?: ISSL;
        selector?: string | ((active?: any, callback?: (err, selectedConection) => void) => any);
        defer?: () => any;
        nodesToHostCallback?: (nodes?: any) => Array<any>;
        createNodeAgent?: (connector?: any, config?: any) => boolean;
    }

    interface IClientBulkParams {

        consistency?: "one" | "quorum" | "all";
        refresh?: boolean;
        routing?: string;
        timeout?: Date | number;
        type?: string;
        fields?: string | Array<string> | boolean;
        index?: string;
    }

    interface IClientClearScrollParams {

        scrollId?: string | Array<string> | boolean;
    }

    interface IClientCountParams {

        ignoreUnavailable?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: "open" | "closed" | "none" | "all";
        minScore?: number;
        preference?: string;
        routing?: string;
        q?: string;
        analyzer?: string;
        analyzeWildcard?: boolean;
        defaultOperator?: "AND" | "OR";
        df?: string;
        lenient?: boolean;
        lowercaseExpandedTerms?: boolean;
        index?: string;
        type?: string | Array<string> | boolean;
    }

    interface IClientGetParams {

        fields?: string | Array<string> | boolean;
        parent?: string;
        preference?: string;
        realtime?: boolean;
        refersh?: boolean;
        routing?: string;
        _source?: string | Array<string> | boolean;
        _sourceExclude?: string | Array<string> | boolean;
        _sourceInclude?: string | Array<string> | boolean;
        version?: number;
        versionType?: "internal" | "external" | "external_gte" | "force";
        id?: string;
        index?: string;
        type?: string;
    }

    interface IClientSearchParams {

        analyzer?: string;
        analyzeWildcard?: boolean;
        defaultOperator?: "AND" | "OR";
        df?: string;
        explain?: boolean;
        fields?: string | Array<string> | boolean;
        fielddataFields?: string | Array<string> | boolean;
        from?: number;
        ignoreUnavailabe?: boolean;
        allowNoIndices?: boolean;
        expandWildcards?: "open" | "closed" | "none" | "all";
        lenient?: boolean;
        lowercaseExpandedTerms?: boolean;
        preference?: string;
        q?: string;
        routing?: string | Array<string> | boolean;
        scroll?: Date; //Duration
        searchType?: "query_then_fetch" | "dfs_query_then_fetch" | "count" | "scan";
        size?: number;
        sort?: string | Array<string> | boolean;
        _source?: string | Array<string> | boolean;
        _sourceExclude?: string | Array<string> | boolean;
        _sourceInclude?: string | Array<string> | boolean;
        terminateAfter?: number;
        stats?: string | Array<string> | boolean;
        suggestField?: string;
        suggestMode?: "missing" | "popular" | "always";
        suggestSize?: number;
        suggestText?: string;
        timeout?: Date | Number;
        trackScores?: boolean;
        version?: boolean;
        requestCache?: boolean;
        index?: string | Array<string> | boolean;
        type?: string | Array<string> | boolean;
    }

    class Client {

        constructor(params: IClientParams);

        bulk(params: IClientBulkParams, callback: (err, resp) => void);

        clearScroll(params: IClientClearScrollParams, callback: (err, resp) => void);

        count(callback: (error, response, status) => void);
        count(params: IClientCountParams, callback: (error, response) => void);

        //countPercolate
        //create
        //delete
        //deleteScript
        //deleteTemplate
        //exists
        //explain
        //fieldStats
        get(params: IClientGetParams, callback: (error, response) => void);
        //getScript
        //getSource
        //getTemplate
        //index
        //info
        //mget
        //mpercolate
        //msearch
        //mtermvectors
        //percolate
        //ping
        //putScript
        //putTemplate
        //reindex
        //renderSearchTemplate
        //scroll
        search(params: IClientSearchParams): Promise<any>;
        search(params: IClientSearchParams, callback: (error, response) => void): void;
        //searchExists
        //searchShards
        //searchTemplate
        //suggest
        //termvectors
        //update
        //updateByQuery
        //cat.aliases
        //cat.allocation
        //cat.count
        //cat.fielddata
        //cat.health
        //cat.help
        //cat.indices
        //cat.master
        //cat.nodeattrs
        //cat.nodes
        //cat.pendingTasks
        //cat.plugins
        //cat.recovery
        //cat.repositories
        //cat.segments
        //cat.shards
        //cat.snapshots
        //cat.threadPool
        //cluster.getSettings
        //cluster.health
        //cluster.pendingTasks
        //cluster.putSettings
        //cluster.reroute
        //cluster.state
        //cluster.stats
        //indices.analyze
        //indices.clearCache
        //indices.close
        //indices.create
        //indeices.delete
        //indices.deleteAlias
        //indices.deleteTemplate
        //indices.deleteWarmer
        //indices.exists
        //indices.existsAlias
        //indices.existsTemplate
        //indices.existsType
        //indices.flush
        //indices.flushSynced
        //indices.forcemerge
        //indices.get
        //indices.getAlias
        //indices.getAliases
        //indices.getFieldMapping
        //indices.getMapping
        //indices.getSettings
        //indices.getTemplate
        //indices.getUpgrade
        //indices.getWarmer
        //indices.open
        //indices.optimize
        //indices.putAlias
        //indices.putMapping
        //indices.putSettings
        //indices.putTemplate
        //indices.putWarmer
        //indices.recovery
        //indices.refresh
        //indices.segments
        //indices.shardStores
        //indices.stats
        //indices.updateAliases
        //indices.upgrade
        //indices.validateQuery
        //nodes.hotThreads
        //nodes.info
        //nodes.stats
        //snapshot.create
        //snapshot.createRepository
        //snapshot.delete
        //snapshot.deleteRepository
        //snapshot.get
        //snapshot.getRepository
        //snapshot.restore
        //snapshot.status
        //snapshot.verifyRepository
        //tasks.cancel
        //tasks.list
    }
}

export = elasticsearch;
